export interface AnswerSummary {
  id: number;
  questionId: number;
  authorUsername: string;
  content: string;
  isAccepted: boolean;
  voteCount: number;
  createdAt: string;
}

export interface CreateAnswerRequest {
  content: string;
}