import { api } from '@/services/api';

export const usersService = {
  profile: (userId: string) => `${api.baseUrl}${api.endpoints.users}/${userId}`,
  settings: () => `${api.baseUrl}${api.endpoints.users}/me/settings`,
  reports: () => `${api.baseUrl}${api.endpoints.users}/me/reports`,
};
