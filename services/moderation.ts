import { api } from '@/services/api';

export const moderationService = {
  queue: () => `${api.baseUrl}${api.endpoints.moderation}/queue`,
  review: (reportId: string) => `${api.baseUrl}${api.endpoints.moderation}/reports/${reportId}`,
  rules: () => `${api.baseUrl}${api.endpoints.moderation}/rules`,
};
