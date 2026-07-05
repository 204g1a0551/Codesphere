import { Routes } from '@angular/router';

import { DoubtDetails } from './doubt-details/doubt-details';
import { DoubtList } from './doubt-list/doubt-list';
import { PostDoubt } from './post-doubt/post-doubt';

export const DOUBTS_ROUTES: Routes = [
  {
    path: '',
    component: DoubtList,
  },
  {
    path: 'post',
    component: PostDoubt,
  },
  {
    path: ':id',
    component: DoubtDetails,
  },
];