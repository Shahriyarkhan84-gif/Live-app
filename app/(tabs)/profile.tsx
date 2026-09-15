import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { ActionCard } from '@/components/ActionCard';
import { Header } from '@/components/Header';
import { UserAvatar } from '@/components/UserAvatar';
import { colors } from '@/constants/colors';
import { useAuth } from '@/hooks/useAuth';
import { usePlatformData } from '@/hooks/usePlatformData';

export default function ProfileScreen() {
  const { currentUser, signOut } = useAuth();
  const { creatorMetrics } = usePlatformData();

  const handleSignOut = () => {
    signOut();
    router.replace('/login');
  };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Header title="Creator profile" subtitle="View the public identity, earnings path, and operations shortcuts for a host." />
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
      <View style={styles.metricSection}>
        {creatorMetrics.map((metric) => (
          <View key={metric.label} style={styles.metricCard}>
            <Text style={styles.metricLabel}>{metric.label}</Text>
            <Text style={styles.metricValue}>{metric.value}</Text>
          </View>
        ))}
      </View>
      <ActionCard title="Creator dashboard" description="Open earnings, live-hour, and payout summaries." href="/creator-dashboard" />
      <ActionCard title="Wallet" description="Review balances, purchases, gifts, and withdrawals." href="/wallet" />
      <ActionCard title="Notifications" description="Check follower, gift, and system alerts." href="/notifications" />
      <ActionCard title="Settings" description="Inspect security, permissions, and moderation preferences." href="/settings" />
      <ActionCard title="Help and testing" description="Review quality stages, support flows, and launch readiness." href="/help" />
      <ActionCard title="Reports" description="Inspect trust, safety, and compliance queues." href="/reports" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 20,
    gap: 18,
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
  metricSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  metricCard: {
    flex: 1,
    minWidth: 140,
    borderRadius: 18,
    backgroundColor: colors.card,
    padding: 16,
    gap: 8,
  },
  metricLabel: {
    color: colors.muted,
    fontSize: 13,
  },
  metricValue: {
    color: colors.accent,
    fontSize: 22,
    fontWeight: '700',
  },
});
