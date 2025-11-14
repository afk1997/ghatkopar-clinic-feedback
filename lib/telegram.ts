import axios from 'axios';
import { FeedbackFormData } from '@/types/feedback';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

/**
 * Formats feedback data into a readable Telegram message
 */
function formatFeedbackMessage(feedback: FeedbackFormData): string {
  const ratingEmoji = (rating: string) => {
    if (rating === 'yes') return '✅';
    if (rating === 'somewhat') return '⚠️';
    if (rating === 'no' || rating === 'too-long') return '❌';
    if (rating === 'could-be-shorter') return '⚠️';
    return '❓';
  };

  const message = `
🐾 *NEW FEEDBACK RECEIVED* 🐾

📍 *Clinic:* ${feedback.clinic}
📅 *Date of Visit:* ${feedback.dateOfVisit}
🔢 *Case Number:* ${feedback.caseNumber}
👤 *Patient Info:* ${feedback.name}
📞 *Contact:* ${feedback.contact}

━━━━━━━━━━━━━━━━━━━━
💬 *FEEDBACK RESPONSES*
━━━━━━━━━━━━━━━━━━━━

${ratingEmoji(feedback.doctorClearExplanation)} *Doctor/Staff Explanation*
${feedback.doctorClearExplanation === 'yes' ? 'Clear explanation' : feedback.doctorClearExplanation === 'somewhat' ? 'Somewhat clear' : 'Not clear'}

${ratingEmoji(feedback.properAttention)} *Proper Attention & Care*
${feedback.properAttention === 'yes' ? 'Received proper care' : feedback.properAttention === 'somewhat' ? 'Somewhat satisfied' : 'Not satisfied'}

${ratingEmoji(feedback.waitingTime)} *Waiting Time*
${feedback.waitingTime === 'yes' ? 'Reasonable' : feedback.waitingTime === 'could-be-shorter' ? 'Could be shorter' : 'Too long'}

${ratingEmoji(feedback.clinicClean)} *Clinic Cleanliness*
${feedback.clinicClean === 'yes' ? 'Clean & comfortable' : feedback.clinicClean === 'somewhat' ? 'Somewhat clean' : 'Not clean'}

${ratingEmoji(feedback.clearInstructions)} *Follow-up Instructions*
${feedback.clearInstructions === 'yes' ? 'Clear instructions' : feedback.clearInstructions === 'somewhat' ? 'Somewhat clear' : 'Not clear'}

━━━━━━━━━━━━━━━━━━━━
💭 *IMPROVEMENT SUGGESTIONS*
━━━━━━━━━━━━━━━━━━━━
${feedback.improvements || 'None provided'}

━━━━━━━━━━━━━━━━━━━━
⏰ Submitted: ${new Date(feedback.submittedAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
  `.trim();

  return message;
}

/**
 * Sends feedback notification to Telegram
 */
export async function sendTelegramNotification(feedback: FeedbackFormData): Promise<boolean> {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error('Telegram credentials not configured');
    return false;
  }

  try {
    const message = formatFeedbackMessage(feedback);
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const response = await axios.post(url, {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'Markdown',
    });

    return response.data.ok;
  } catch (error) {
    console.error('Error sending Telegram notification:', error);
    return false;
  }
}
