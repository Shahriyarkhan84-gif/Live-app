import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Header } from '@/components/Header';
import { UserAvatar } from '@/components/UserAvatar';
import { colors } from '@/constants/colors';
import { useAuth } from '@/hooks/useAuth';

export default function ProfileScreen() {
  const { currentUser, signOut } = useAuth();
  const handleSignOut = () => {
    signOut();
    router.replace('/(auth)/login');
  };

  return (
    <View style={styles.screen}>
      <Header title="Profile" subtitle="Manage your public creator identity" />
      <View style={styles.card}>
        <UserAvatar name={currentUser.name} size={72} />
        <Text style={styles.name}>{currentUser.name}</Text>
        <Text style={styles.handle}>{currentUser.handle}</Text>
        <Text style={styles.meta}>Followers: {currentUser.followers}</Text>
        <Text style={styles.meta}>Earnings: ${currentUser.earnings}</Text>
        <Pressable onPress={handleSignOut} style={styles.button}>
          <Text style={styles.buttonText}>Sign out</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    gap: 16,
  },
  card: {
    alignItems: 'center',
    gap: 10,
    borderRadius: 20,
    backgroundColor: colors.card,
    padding: 24,
  },
  name: {
    color: colors.text,
    fontSize: 24,
    fontWeight: '700',
  },
  handle: {
    color: colors.muted,
    fontSize: 16,
  },
  meta: {
    color: colors.text,
    fontSize: 16,
  },
  button: {
    marginTop: 12,
    backgroundColor: colors.primary,
    borderRadius: 14,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  buttonText: {
    color: colors.background,
    fontWeight: '700',
  },
});
