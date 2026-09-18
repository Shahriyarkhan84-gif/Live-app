import { api } from '@/services/api';

export const authService = {
  signIn: () => `${api.baseUrl}${api.endpoints.auth}/login`,
  register: () => `${api.baseUrl}${api.endpoints.auth}/register`,
  profile: () => `${api.baseUrl}${api.endpoints.auth}/me`,
};
