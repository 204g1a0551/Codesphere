import { Routes } from '@angular/router';

import { EditProfile } from './edit-profile/edit-profile';
import { ProfilePage } from './profile-page/profile-page';

export const PROFILE_ROUTES: Routes = [
  {
    path: '',
    component: ProfilePage,
  },
  {
    path: 'edit',
    component: EditProfile,
  },
];