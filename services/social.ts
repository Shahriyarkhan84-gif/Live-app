import { api } from '@/services/api';

export const socialService = {
  followers: (userId: string) => `${api.baseUrl}${api.endpoints.social}/users/${userId}/followers`,
  following: (userId: string) => `${api.baseUrl}${api.endpoints.social}/users/${userId}/following`,
  follow: (userId: string) => `${api.baseUrl}${api.endpoints.social}/users/${userId}/follow`,
};
