import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { ActionCard } from '@/components/ActionCard';
import { Header } from '@/components/Header';
import { LessonTimeline } from '@/components/LessonTimeline';
import { LiveCard } from '@/components/LiveCard';
import { StatCard } from '@/components/StatCard';
import { colors } from '@/constants/colors';
import { useLiveRoom } from '@/hooks/useLiveRoom';
import { usePlatformData } from '@/hooks/usePlatformData';

export default function HomeScreen() {
  const { featuredRooms } = useLiveRoom();
  const { lessonRoadmap, platformMetrics, quickActions } = usePlatformData();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Header title="BIGO-style live platform" subtitle="Prototype the app, operations, and monetization layers in one Expo experience." />
      <View style={styles.metricsRow}>
        {platformMetrics.map((metric) => (
          <StatCard key={metric.label} label={metric.label} value={metric.value} tone={metric.tone} />
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Live now</Text>
        {featuredRooms.map((room) => (
          <LiveCard key={room.id} room={room} />
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Platform surfaces</Text>
        {quickActions.map((action) => (
          <ActionCard key={action.title} title={action.title} description={action.description} href={action.href} />
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Lesson roadmap</Text>
        <LessonTimeline lessons={lessonRoadmap} limit={6} />
      </View>
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
    gap: 20,
  },
  metricsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  section: {
    gap: 14,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '700',
  },
});
