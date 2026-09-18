import { Stack } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Header } from '@/components/Header';
import { InfoListCard } from '@/components/InfoListCard';
import { StatCard } from '@/components/StatCard';
import { colors } from '@/constants/colors';
import { usePlatformData } from '@/hooks/usePlatformData';

export default function AdminScreen() {
  const { adminMetrics = [], adminModules = [], reportQueue = [] } = usePlatformData();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Stack.Screen options={{ headerShown: true, title: 'Admin' }} />
      <Header title="Admin dashboard" subtitle="Users, hosts, live rooms, moderation, coins, withdrawals, analytics, and audit logs." />
      <View style={styles.metricsRow}>
        {adminMetrics.map((metric) => (
          <StatCard key={metric.label} label={metric.label} value={metric.value} tone={metric.tone} />
        ))}
      </View>
      {adminModules.map((module) => (
        <View key={module.title} style={styles.moduleCard}>
          <Text style={styles.moduleTitle}>{module.title}</Text>
          <View style={styles.modulePills}>
            {module.items.map((item) => (
              <Text key={item} style={styles.modulePill}>{item}</Text>
            ))}
          </View>
        </View>
      ))}
      <InfoListCard title="Priority queue" items={reportQueue} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { gap: 18, padding: 20 },
  metricsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  moduleCard: { gap: 12, borderRadius: 24, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.card, padding: 18 },
  moduleTitle: { color: colors.text, fontSize: 18, fontWeight: '800' },
  modulePills: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  modulePill: { overflow: 'hidden', borderRadius: 999, backgroundColor: colors.overlay, color: colors.text, paddingHorizontal: 12, paddingVertical: 8, fontWeight: '700' },
});
