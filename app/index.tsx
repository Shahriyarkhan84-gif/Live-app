import { Redirect } from 'expo-router';

import { useAuth } from '@/hooks/useAuth';

export default function IndexScreen() {
  const { isAuthenticated } = useAuth();

  return <Redirect href={isAuthenticated ? '/(tabs)' : '/(auth)/login'} />;
}
