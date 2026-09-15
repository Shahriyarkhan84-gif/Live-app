import { useMemo, useSyncExternalStore } from 'react';

const demoUser = {
  name: 'Avery Stone',
  handle: '@averystreams',
  followers: '18.4K',
  earnings: '1,240',
};

let isAuthenticatedState = false;
const listeners = new Set<() => void>();

function emitChange() {
  listeners.forEach((listener) => listener());
}

function setAuthenticated(nextValue: boolean) {
  isAuthenticatedState = nextValue;
  emitChange();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return isAuthenticatedState;
}

export function useAuth() {
  const isAuthenticated = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  return useMemo(
    () => ({
      isAuthenticated,
      currentUser: demoUser,
      signIn: () => setAuthenticated(true),
      signOut: () => setAuthenticated(false),
    }),
    [isAuthenticated],
  );
}
