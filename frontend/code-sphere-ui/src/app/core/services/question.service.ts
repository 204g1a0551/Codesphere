import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

import { API_CONSTANTS } from '../constants/api.constants';
import { ApiResponse, PaginatedResponse } from '../models/api-response.model';
import { CreateQuestionRequest, QuestionDetail, QuestionSummary } from '../models/question.model';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class QuestionService {
  private readonly apiService = inject(ApiService);

  listQuestions(): Observable<PaginatedResponse<QuestionSummary>> {
    return this.apiService.get<PaginatedResponse<QuestionSummary>>(`${API_CONSTANTS.baseUrl}${API_CONSTANTS.questions.list}`);
  }

  getQuestion(questionId: number): Observable<QuestionDetail> {
    return this.apiService
      .get<ApiResponse<QuestionDetail>>(`${API_CONSTANTS.baseUrl}${API_CONSTANTS.questions.detail(questionId)}`)
      .pipe(map((response) => response.data));
  }

  createQuestion(payload: CreateQuestionRequest): Observable<QuestionDetail> {
    return this.apiService
      .post<ApiResponse<QuestionDetail>, CreateQuestionRequest>(`${API_CONSTANTS.baseUrl}${API_CONSTANTS.questions.create}`, payload)
      .pipe(map((response) => response.data));
  }
}