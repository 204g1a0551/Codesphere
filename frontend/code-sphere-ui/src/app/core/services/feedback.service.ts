import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class FeedbackService {
  private readonly snackBar = inject(MatSnackBar);

  showSuccess(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3500,
      panelClass: ['app-snackbar', 'app-snackbar--success'],
    });
  }

  showError(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      panelClass: ['app-snackbar', 'app-snackbar--error'],
    });
  }

  showInfo(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3500,
      panelClass: ['app-snackbar', 'app-snackbar--info'],
    });
  }
}