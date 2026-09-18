import { api } from '@/services/api';

export const giftsService = {
  catalog: () => `${api.baseUrl}${api.endpoints.gifts}`,
  leaderboard: () => `${api.baseUrl}${api.endpoints.gifts}/leaderboard`,
  send: (roomId: string) => `${api.baseUrl}${api.endpoints.gifts}/${roomId}/send`,
};
