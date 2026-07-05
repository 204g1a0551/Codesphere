import { Injectable, computed, inject, signal } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

import { API_CONSTANTS } from '../constants/api.constants';
import { ApiResponse } from '../models/api-response.model';
import { AuthSession, LoginRequest, RegisterRequest } from '../models/user.model';
import { ApiService } from './api.service';
import { StorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly apiService = inject(ApiService);
  private readonly storageService = inject(StorageService);
  private readonly sessionState = signal<AuthSession | null>(this.restoreSession());

  readonly session = this.sessionState.asReadonly();
  readonly currentUser = computed(() => this.sessionState()?.user ?? null);
  readonly isAuthenticated = computed(() => this.sessionState() !== null);

  login(payload: LoginRequest): Observable<AuthSession> {
    return this.apiService
      .post<ApiResponse<AuthSession>, LoginRequest>(`${API_CONSTANTS.baseUrl}${API_CONSTANTS.auth.login}`, payload)
      .pipe(
        map((response) => response.data),
        tap((session) => this.persistSession(session)),
      );
  }

  register(payload: RegisterRequest): Observable<AuthSession> {
    return this.apiService
      .post<ApiResponse<AuthSession>, RegisterRequest>(`${API_CONSTANTS.baseUrl}${API_CONSTANTS.auth.register}`, payload)
      .pipe(
        map((response) => response.data),
        tap((session) => this.persistSession(session)),
      );
  }

  logout(): void {
    this.storageService.clearAll();
    this.sessionState.set(null);
  }

  getAccessToken(): string | null {
    return this.sessionState()?.tokens.access ?? this.storageService.getAccessToken();
  }

  private persistSession(session: AuthSession): void {
    this.sessionState.set(session);
    this.storageService.setAccessToken(session.tokens.access);
    this.storageService.setSession(session);
  }

  private restoreSession(): AuthSession | null {
    return this.storageService.getSession<AuthSession>();
  }
}