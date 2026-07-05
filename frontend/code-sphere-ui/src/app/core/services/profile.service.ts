import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

import { API_CONSTANTS } from '../constants/api.constants';
import { ApiResponse } from '../models/api-response.model';
import { Profile, UpdateProfileRequest } from '../models/profile.model';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private readonly apiService = inject(ApiService);

  getCurrentProfile(): Observable<Profile> {
    return this.apiService
      .get<ApiResponse<Profile>>(`${API_CONSTANTS.baseUrl}${API_CONSTANTS.profile.me}`)
      .pipe(map((response) => response.data));
  }

  updateProfile(payload: UpdateProfileRequest): Observable<Profile> {
    return this.apiService
      .put<ApiResponse<Profile>, UpdateProfileRequest>(`${API_CONSTANTS.baseUrl}${API_CONSTANTS.profile.me}`, payload)
      .pipe(map((response) => response.data));
  }
}