import { useMemo } from 'react';

const demoMessages = [
  { id: '1', author: 'Lena', text: 'The stream quality looks great 🔥' },
  { id: '2', author: 'Marcus', text: 'Can you show your setup after this match?' },
  { id: '3', author: 'Sia', text: 'Gift sent! Keep going ✨' },
];

export function useChat() {
  return useMemo(
    () => ({
      messages: demoMessages,
    }),
    [],
  );
}
