import { Routes } from '@angular/router';

import { ForgotPassword } from './forgot-password/forgot-password';
import { Login } from './login/login';
import { Register } from './register/register';

export const AUTHENTICATION_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'register',
    component: Register,
  },
  {
    path: 'forgot-password',
    component: ForgotPassword,
  },
];