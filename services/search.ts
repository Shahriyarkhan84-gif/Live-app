import { api } from '@/services/api';

export const searchService = {
  categories: () => `${api.baseUrl}${api.endpoints.search}/categories`,
  creators: (query: string) => `${api.baseUrl}${api.endpoints.search}/creators?q=${encodeURIComponent(query)}`,
  liveRooms: (query: string) => `${api.baseUrl}${api.endpoints.search}/rooms?q=${encodeURIComponent(query)}`,
};
