import { api } from '@/services/api';

export const notificationsService = {
  feed: () => `${api.baseUrl}${api.endpoints.notifications}`,
  preferences: () => `${api.baseUrl}${api.endpoints.notifications}/preferences`,
};
