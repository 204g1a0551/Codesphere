import { Routes } from '@angular/router';

import { AnswerEditor } from './answer-editor/answer-editor';
import { SolveList } from './solve-list/solve-list';

export const SOLVE_ROUTES: Routes = [
  {
    path: '',
    component: SolveList,
  },
  {
    path: 'answer',
    component: AnswerEditor,
  },
];