import { Stack } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Header } from '@/components/Header';
import { InfoListCard } from '@/components/InfoListCard';
import { StatCard } from '@/components/StatCard';
import { colors } from '@/constants/colors';
import { usePlatformData } from '@/hooks/usePlatformData';

export default function WalletScreen() {
  const { walletLedger = [], walletMetrics = [] } = usePlatformData();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Stack.Screen options={{ headerShown: true, title: 'Wallet' }} />
      <Header title="Wallet" subtitle="Coins, transactions, gifts, host earnings, and withdrawals managed by the backend as source of truth." />
      <View style={styles.metricsRow}>
        {walletMetrics.map((metric) => (
          <StatCard key={metric.label} label={metric.label} value={metric.value} tone={metric.tone} />
        ))}
      </View>
      <InfoListCard title="Ledger" items={walletLedger} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { gap: 18, padding: 20 },
  metricsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
});
