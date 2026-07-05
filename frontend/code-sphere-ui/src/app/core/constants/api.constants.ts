import { environment } from '../../../environments/environment';

export const API_CONSTANTS = {
  baseUrl: environment.apiUrl,
  auth: {
    login: '/auth/login/',
    register: '/auth/register/',
    refresh: '/auth/token/refresh/',
    profile: '/auth/me/',
  },
  questions: {
    list: '/questions/',
    detail: (id: number) => `/questions/${id}/`,
    create: '/questions/',
  },
  answers: {
    list: (questionId: number) => `/questions/${questionId}/answers/`,
    create: (questionId: number) => `/questions/${questionId}/answers/`,
  },
  profile: {
    me: '/profile/me/',
  },
  search: {
    query: '/search/',
  },
  ai: {
    suggest: '/ai/suggest/',
  },
  notifications: {
    list: '/notifications/',
  },
} as const;