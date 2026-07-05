import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  protected readonly http = inject(HttpClient);

  get<TResponse>(url: string): Observable<TResponse> {
    return this.http.get<TResponse>(url);
  }

  post<TResponse, TPayload>(url: string, payload: TPayload): Observable<TResponse> {
    return this.http.post<TResponse>(url, payload);
  }

  put<TResponse, TPayload>(url: string, payload: TPayload): Observable<TResponse> {
    return this.http.put<TResponse>(url, payload);
  }

  patch<TResponse, TPayload>(url: string, payload: TPayload): Observable<TResponse> {
    return this.http.patch<TResponse>(url, payload);
  }

  delete<TResponse>(url: string): Observable<TResponse> {
    return this.http.delete<TResponse>(url);
  }
}