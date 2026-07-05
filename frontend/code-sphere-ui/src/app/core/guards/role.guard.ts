import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { ROUTE_PATHS } from '../constants/route.constants';
import { UserRole } from '../models/user.model';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const currentUser = authService.currentUser();
  const allowedRoles = (route.data['roles'] as UserRole[] | undefined) ?? [];

  if (!currentUser) {
    return router.createUrlTree([`/${ROUTE_PATHS.auth}/login`]);
  }

  if (allowedRoles.length === 0 || allowedRoles.includes(currentUser.role)) {
    return true;
  }

  return router.createUrlTree([`/${ROUTE_PATHS.home}`]);
};