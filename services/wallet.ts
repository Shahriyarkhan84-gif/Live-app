import { api } from '@/services/api';

export const walletService = {
  balance: () => `${api.baseUrl}${api.endpoints.wallet}/balance`,
  ledger: () => `${api.baseUrl}${api.endpoints.wallet}/ledger`,
  withdraw: () => `${api.baseUrl}${api.endpoints.wallet}/withdraw`,
};
