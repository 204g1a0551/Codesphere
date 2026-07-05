export type UserRole = 'USER' | 'MODERATOR' | 'ADMIN';

export interface UserProfile {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  avatarUrl: string | null;
  bio: string | null;
  isActive: boolean;
}

export interface AuthTokens {
  access: string;
  refresh: string;
}

export interface AuthSession {
  user: UserProfile;
  tokens: AuthTokens;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ResetPasswordRequest {
  email: string;
}