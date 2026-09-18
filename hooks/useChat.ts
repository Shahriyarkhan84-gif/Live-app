import { useMemo } from 'react';

import { useQuery } from '@tanstack/react-query';

import { fetchMessages } from '@/services/mockApi';

export function useChat() {
  const query = useQuery({
    queryKey: ['messages'],
    queryFn: fetchMessages,
  });

  return useMemo(
    () => ({
      conversations: query.data?.conversations ?? [],
      messages: (query.data?.roomMessages ?? []).map((message, index) => ({
        id: `${index}`,
        author: message.title,
        text: message.detail,
      })),
      privateChatRules: query.data?.privateChatRules ?? [],
      isLoading: query.isLoading,
      isRefetching: query.isRefetching,
      refetch: query.refetch,
    }),
    [query.data, query.isLoading, query.isRefetching, query.refetch],
  );
}
