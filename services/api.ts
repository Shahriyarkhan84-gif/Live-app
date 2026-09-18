import { config } from '@/constants/config';

export const api = {
  baseUrl: config.apiBaseUrl,
  endpoints: {
    auth: {
      login: '/auth/login',
      logout: '/auth/logout',
      refresh: '/auth/refresh',
      register: '/auth/register',
    },
    discovery: {
      categories: '/categories',
      countries: '/countries',
      live: '/live',
    },
    earnings: '/earnings',
    friends: '/friends',
    gifts: '/gifts',
    live: '/live',
    messages: '/messages',
    reports: '/reports',
    users: '/users',
    wallet: '/wallet',
    withdrawals: '/withdrawals',
  },
};
