import { Stack } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Header } from '@/components/Header';
import { InfoListCard } from '@/components/InfoListCard';
import { StatCard } from '@/components/StatCard';
import { colors } from '@/constants/colors';
import { usePlatformData } from '@/hooks/usePlatformData';

const payoutFlow = [
  { title: 'Pending earnings', detail: 'Gift revenue lands in pending balance after room settlement.', meta: 'lesson 12' },
  { title: 'Available balance', detail: 'Compliance and refund windows clear funds for withdrawal.', meta: 'lesson 16' },
  { title: 'Withdrawal request', detail: 'The payout service runs fraud and account checks before approval.', meta: 'risk gate' },
  { title: 'Reporting and analytics', detail: 'Daily, weekly, and monthly summaries power creator insights.', meta: 'ops data' },
];

export default function CreatorDashboardScreen() {
  const { creatorMetrics } = usePlatformData();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Stack.Screen options={{ headerShown: true, title: 'Creator Dashboard' }} />
      <Header title="Creator dashboard" subtitle="Monitor growth, gifting, earnings, and withdrawal readiness." />
      <View style={styles.metricsRow}>
        {creatorMetrics.map((metric) => (
          <StatCard key={metric.label} label={metric.label} value={metric.value} tone={metric.tone} />
        ))}
      </View>
      <InfoListCard title="Earnings pipeline" items={payoutFlow} />
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
  metricsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
});
