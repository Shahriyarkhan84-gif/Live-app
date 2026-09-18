import { api } from '@/services/api';

export const chatService = {
  thread: (roomId: string) => `${api.baseUrl}${api.endpoints.chat}/${roomId}`,
  send: (roomId: string) => `${api.baseUrl}${api.endpoints.chat}/${roomId}/messages`,
};
