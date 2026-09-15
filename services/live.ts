import { api } from '@/services/api';

export const liveService = {
  list: () => `${api.baseUrl}${api.endpoints.live}`,
  details: (roomId: string) => `${api.baseUrl}${api.endpoints.live}/${roomId}`,
  start: () => `${api.baseUrl}${api.endpoints.live}/start`,
};
