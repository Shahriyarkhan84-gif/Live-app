import { config } from '@/constants/config';

export const api = {
  baseUrl: config.apiBaseUrl,
  endpoints: {
    admin: '/admin',
    analytics: '/analytics',
    auth: '/auth',
    chat: '/chat',
    gifts: '/gifts',
    live: '/live',
    moderation: '/moderation',
    notifications: '/notifications',
    payments: '/payments',
    recommendations: '/recommendations',
    reports: '/reports',
    search: '/search',
    social: '/social',
    users: '/users',
    wallet: '/wallet',
  },
};
