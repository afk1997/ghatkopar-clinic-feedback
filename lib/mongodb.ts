import { MongoClient, Db } from 'mongodb';
import { FeedbackFormData } from '@/types/feedback';

const MONGODB_URI = process.env.MONGODB_URI;

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

/**
 * Connect to MongoDB (with connection caching)
 */
async function connectToDatabase() {
  if (!MONGODB_URI) {
    console.warn('MongoDB URI not configured. Skipping database storage.');
    return null;
  }

  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db('clinic-feedback');

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

/**
 * Save feedback to MongoDB
 */
export async function saveFeedbackToDatabase(feedback: FeedbackFormData): Promise<boolean> {
  try {
    const connection = await connectToDatabase();

    if (!connection) {
      console.log('Database not configured, skipping storage');
      return true; // Return true to not block the flow
    }

    const { db } = connection;
    const collection = db.collection('feedbacks');

    await collection.insertOne({
      ...feedback,
      submittedAt: new Date(feedback.submittedAt),
    });

    console.log('Feedback saved to database');
    return true;
  } catch (error) {
    console.error('Error saving to database:', error);
    return false;
  }
}
