import { NextRequest, NextResponse } from 'next/server';
import { FeedbackFormData, ApiResponse } from '@/types/feedback';
import { sendTelegramNotification } from '@/lib/telegram';
import { saveFeedbackToDatabase } from '@/lib/mongodb';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const requiredFields = [
      'clinic',
      'dateOfVisit',
      'caseNumber',
      'name',
      'contact',
      'doctorClearExplanation',
      'properAttention',
      'waitingTime',
      'clinicClean',
      'clearInstructions',
    ];

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          {
            success: false,
            message: `Missing required field: ${field}`,
          } as ApiResponse,
          { status: 400 }
        );
      }
    }

    // Create feedback object
    const feedback: FeedbackFormData = {
      ...body,
      submittedAt: new Date(),
    };

    // Send to Telegram
    const telegramSent = await sendTelegramNotification(feedback);

    if (!telegramSent) {
      console.error('Failed to send Telegram notification');
    }

    // Save to database (optional - won't fail if MongoDB not configured)
    await saveFeedbackToDatabase(feedback);

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your feedback! Your response has been submitted.',
      } as ApiResponse,
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing feedback:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while submitting your feedback.',
        error: error instanceof Error ? error.message : 'Unknown error',
      } as ApiResponse,
      { status: 500 }
    );
  }
}
