import { config } from '@/constants/config';

export const api = {
  baseUrl: config.apiBaseUrl,
  endpoints: {
    auth: '/auth',
    live: '/live',
    chat: '/chat',
    payments: '/payments',
  },
};
