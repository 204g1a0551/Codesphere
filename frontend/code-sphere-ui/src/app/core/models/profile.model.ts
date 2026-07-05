import { UserProfile } from './user.model';

export interface UpdateProfileRequest {
  firstName: string;
  lastName: string;
  bio: string;
  avatarUrl: string;
}

export type Profile = UserProfile;