import { config } from '@/constants/config';

export const api = {
  baseUrl: config.apiBaseUrl,
  endpoints: {
    admin: '/admin',
    analytics: '/analytics',
    auth: {
      login: '/auth/login',
      logout: '/auth/logout',
      refresh: '/auth/refresh',
      register: '/auth/register',
    },
    chat: '/chat',
    discovery: {
      categories: '/categories',
      countries: '/countries',
      live: '/live',
    },
    earnings: '/earnings',
    friends: '/friends',
    gifts: '/gifts',
    live: '/live',
    moderation: '/moderation',
    messages: '/messages',
    notifications: '/notifications',
    payments: '/payments',
    recommendations: '/recommendations',
    reports: '/reports',
    search: '/search',
    social: '/social',
    users: '/users',
    wallet: '/wallet',
    withdrawals: '/withdrawals',
  },
};
