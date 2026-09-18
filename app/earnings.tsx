import { Stack } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Header } from '@/components/Header';
import { InfoListCard } from '@/components/InfoListCard';
import { StatCard } from '@/components/StatCard';
import { colors } from '@/constants/colors';
import { usePlatformData } from '@/hooks/usePlatformData';

const payoutFlow = [
  { title: 'Gift earnings', detail: 'Gift transactions convert into host earning records after backend validation.', meta: 'earnings' },
  { title: 'Pending balance', detail: 'Funds remain pending until review and refund windows are cleared.', meta: 'pending' },
  { title: 'Withdrawal review', detail: 'Approved withdrawals move through signed payout processing.', meta: 'review' },
  { title: 'Host report', detail: 'n8n generates daily and weekly host reports after broadcasts end.', meta: 'automation' },
];

export default function EarningsScreen() {
  const { creatorMetrics = [] } = usePlatformData();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Stack.Screen options={{ headerShown: true, title: 'Earnings' }} />
      <Header title="Host earnings" subtitle="Follow the money flow from gifts to net earnings, reports, and withdrawals." />
      <View style={styles.metricsRow}>
        {creatorMetrics.map((metric) => (
          <StatCard key={metric.label} label={metric.label} value={metric.value} tone={metric.tone} />
        ))}
      </View>
      <InfoListCard title="Earnings flow" items={payoutFlow} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { gap: 18, padding: 20 },
  metricsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
});
