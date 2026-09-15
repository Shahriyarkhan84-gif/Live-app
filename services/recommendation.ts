import { api } from '@/services/api';

export const recommendationService = {
  homeFeed: () => `${api.baseUrl}${api.endpoints.recommendations}/home-feed`,
  relatedStreams: (roomId: string) => `${api.baseUrl}${api.endpoints.recommendations}/streams/${roomId}`,
};
