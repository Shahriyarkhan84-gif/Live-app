import { api } from '@/services/api';

export const paymentsService = {
  wallet: () => `${api.baseUrl}${api.endpoints.payments}/wallet`,
  gifts: () => `${api.baseUrl}${api.endpoints.payments}/gifts`,
  withdraw: () => `${api.baseUrl}${api.endpoints.payments}/withdraw`,
};
