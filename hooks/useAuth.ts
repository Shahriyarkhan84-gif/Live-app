import { useMemo, useState } from 'react';

const demoUser = {
  name: 'Avery Stone',
  handle: '@averystreams',
  followers: '18.4K',
  earnings: '1,240',
};

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return useMemo(
    () => ({
      isAuthenticated,
      currentUser: demoUser,
      signIn: () => setIsAuthenticated(true),
      signOut: () => setIsAuthenticated(false),
    }),
    [isAuthenticated],
  );
}
