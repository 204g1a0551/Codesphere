import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {
  private readonly accessTokenKey = 'codesphere.access-token';
  private readonly sessionKey = 'codesphere.auth-session';

  setAccessToken(token: string): void {
    localStorage.setItem(this.accessTokenKey, token);
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.accessTokenKey);
  }

  clearAccessToken(): void {
    localStorage.removeItem(this.accessTokenKey);
  }

  setSession<TSession>(session: TSession): void {
    localStorage.setItem(this.sessionKey, JSON.stringify(session));
  }

  getSession<TSession>(): TSession | null {
    const rawSession = localStorage.getItem(this.sessionKey);

    if (!rawSession) {
      return null;
    }

    return JSON.parse(rawSession) as TSession;
  }

  clearSession(): void {
    localStorage.removeItem(this.sessionKey);
  }

  clearAll(): void {
    this.clearAccessToken();
    this.clearSession();
  }
}