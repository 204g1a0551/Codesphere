import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';

import { FeedbackService } from '../services/feedback.service';

export const errorInterceptor: HttpInterceptorFn = (request, next) => {
  const feedbackService = inject(FeedbackService);

  return next(request).pipe(
    catchError((error: HttpErrorResponse) => {
      const errorMessage = error.error?.message ?? error.message ?? 'An unexpected error occurred.';
      feedbackService.showError(errorMessage);

      console.error('API error', {
        url: request.url,
        status: error.status,
        message: error.message,
      });

      return throwError(() => error);
    }),
  );
};