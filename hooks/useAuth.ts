import { useAppStore } from '@/stores/appStore';

export function useAuth() {
  const isAuthenticated = useAppStore((state) => state.isAuthenticated);
  const currentUser = useAppStore((state) => state.currentUser);
  const signIn = useAppStore((state) => state.signIn);
  const signOut = useAppStore((state) => state.signOut);

  return {
    isAuthenticated,
    currentUser,
    signIn,
    signOut,
  };
}
