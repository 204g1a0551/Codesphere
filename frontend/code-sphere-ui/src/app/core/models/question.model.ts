export interface QuestionSummary {
  id: number;
  title: string;
  slug: string;
  authorUsername: string;
  tags: string[];
  answerCount: number;
  voteCount: number;
  createdAt: string;
}

export interface QuestionDetail extends QuestionSummary {
  description: string;
  acceptedAnswerId: number | null;
  updatedAt: string;
}

export interface CreateQuestionRequest {
  title: string;
  description: string;
  tags: string[];
}