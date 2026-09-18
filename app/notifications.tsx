import { Stack } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Header } from '@/components/Header';
import { InfoListCard } from '@/components/InfoListCard';
import { StatCard } from '@/components/StatCard';
import { colors } from '@/constants/colors';
import { usePlatformData } from '@/hooks/usePlatformData';

export default function NotificationsScreen() {
  const { notificationFeed = [], homeMetrics = [] } = usePlatformData();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Stack.Screen options={{ headerShown: true, title: 'Notifications' }} />
      <Header title="Notifications" subtitle="Follower, mutual-follow, message, live, gift, withdrawal, security, and system alerts." />
      <View style={styles.metricsRow}>
        {homeMetrics.slice(0, 3).map((metric) => (
          <StatCard key={metric.label} label={metric.label} value={metric.value} tone={metric.tone} />
        ))}
      </View>
      <InfoListCard title="Notification feed" items={notificationFeed} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { gap: 18, padding: 20 },
  metricsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
});
