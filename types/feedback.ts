export type RatingOption = 'yes' | 'somewhat' | 'no';
export type WaitingTimeOption = 'yes' | 'could-be-shorter' | 'too-long';

export interface FeedbackFormData {
  clinic: 'Ghatkopar' | 'Kandivali';
  dateOfVisit: string;
  caseNumber: string;
  name: string;
  contact: string;

  // Feedback Questions
  doctorClearExplanation: RatingOption;
  properAttention: RatingOption;
  waitingTime: WaitingTimeOption;
  clinicClean: RatingOption;
  clearInstructions: RatingOption;
  improvements: string;

  // Metadata
  submittedAt: Date;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  error?: string;
}
