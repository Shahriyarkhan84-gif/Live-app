import { useMemo } from 'react';

import { useQuery } from '@tanstack/react-query';

import { fetchLiveFeed } from '@/services/mockApi';
import { useAppStore } from '@/stores/appStore';

export function useLiveRoom() {
  const selectedCountryCode = useAppStore((state) => state.selectedCountryCode);
  const setSelectedCountryCode = useAppStore((state) => state.setSelectedCountryCode);

  const query = useQuery({
    queryKey: ['live-feed', selectedCountryCode],
    queryFn: () => fetchLiveFeed(selectedCountryCode),
  });

  return useMemo(() => {
    const data = query.data;

    return {
      selectedCountryCode,
      setSelectedCountryCode,
      countries: data?.countries ?? [],
      categories: data?.categories ?? [],
      countryLive: data?.countryLive ?? [],
      followingLive: data?.followingLive ?? [],
      popularLive: data?.popularLive ?? [],
      recommended: data?.recommended ?? [],
      allHosts: data?.allHosts ?? [],
      getRoomById: (roomId: string) => data?.allHosts.find((room) => room.id === roomId),
      isLoading: query.isLoading,
      isRefetching: query.isRefetching,
      refetch: query.refetch,
    };
  }, [query.data, query.isLoading, query.isRefetching, query.refetch, selectedCountryCode, setSelectedCountryCode]);
}
