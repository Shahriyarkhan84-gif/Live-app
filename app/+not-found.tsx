import { Stack } from 'expo-router';

import { NotFoundState } from '@/components/NotFoundState';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <NotFoundState />
    </>
  );
}
