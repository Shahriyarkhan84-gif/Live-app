import { Stack } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Header } from '@/components/Header';
import { InfoListCard } from '@/components/InfoListCard';
import { StatCard } from '@/components/StatCard';
import { colors } from '@/constants/colors';
import { usePlatformData } from '@/hooks/usePlatformData';

export default function AnalyticsScreen() {
  const { adminMetrics = [], analyticsCards = [] } = usePlatformData();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Stack.Screen options={{ headerShown: true, title: 'Analytics' }} />
      <Header title="Analytics" subtitle="Daily and weekly reports for users, broadcasts, viewers, gifts, coins, earnings, and withdrawals." />
      <View style={styles.metricsRow}>
        {adminMetrics.slice(0, 4).map((metric) => (
          <StatCard key={metric.label} label={metric.label} value={metric.value} tone={metric.tone} />
        ))}
      </View>
      <InfoListCard title="Analytics cards" items={analyticsCards} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { gap: 18, padding: 20 },
  metricsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
});
