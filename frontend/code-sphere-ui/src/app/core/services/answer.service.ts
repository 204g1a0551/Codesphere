import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

import { API_CONSTANTS } from '../constants/api.constants';
import { ApiResponse } from '../models/api-response.model';
import { AnswerSummary, CreateAnswerRequest } from '../models/answer.model';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class AnswerService {
  private readonly apiService = inject(ApiService);

  listAnswers(questionId: number): Observable<AnswerSummary[]> {
    return this.apiService
      .get<ApiResponse<AnswerSummary[]>>(`${API_CONSTANTS.baseUrl}${API_CONSTANTS.answers.list(questionId)}`)
      .pipe(map((response) => response.data));
  }

  createAnswer(questionId: number, payload: CreateAnswerRequest): Observable<AnswerSummary> {
    return this.apiService
      .post<ApiResponse<AnswerSummary>, CreateAnswerRequest>(`${API_CONSTANTS.baseUrl}${API_CONSTANTS.answers.create(questionId)}`, payload)
      .pipe(map((response) => response.data));
  }
}