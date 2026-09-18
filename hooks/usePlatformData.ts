import { useQuery } from '@tanstack/react-query';

import { fetchPlatformData } from '@/services/mockApi';

export function usePlatformData() {
  const query = useQuery({
    queryKey: ['platform-data'],
    queryFn: fetchPlatformData,
  });

  return {
    ...query.data,
    isLoading: query.isLoading,
    isRefetching: query.isRefetching,
    refetch: query.refetch,
  };
}
