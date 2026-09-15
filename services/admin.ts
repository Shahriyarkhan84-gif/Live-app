import { api } from '@/services/api';

export const adminService = {
  dashboard: () => `${api.baseUrl}${api.endpoints.admin}/dashboard`,
  reports: () => `${api.baseUrl}${api.endpoints.admin}/reports`,
  withdrawals: () => `${api.baseUrl}${api.endpoints.admin}/withdrawals`,
};
