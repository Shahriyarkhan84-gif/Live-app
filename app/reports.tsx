import { Stack } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';

import { Header } from '@/components/Header';
import { InfoListCard } from '@/components/InfoListCard';
import { colors } from '@/constants/colors';
import { usePlatformData } from '@/hooks/usePlatformData';

export default function ReportsScreen() {
  const { reportQueue = [] } = usePlatformData();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Stack.Screen options={{ headerShown: true, title: 'Reports' }} />
      <Header title="Reports" subtitle="User reports, moderation actions, automated alerts, and admin escalation flows." />
      <InfoListCard title="Moderation and system reports" items={reportQueue} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { gap: 18, padding: 20 },
});
