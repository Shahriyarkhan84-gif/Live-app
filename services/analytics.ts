import { api } from '@/services/api';

export const analyticsService = {
  creatorOverview: () => `${api.baseUrl}${api.endpoints.analytics}/creator-overview`,
  livePerformance: (roomId: string) => `${api.baseUrl}${api.endpoints.analytics}/live/${roomId}`,
  platformHealth: () => `${api.baseUrl}${api.endpoints.analytics}/platform-health`,
};
