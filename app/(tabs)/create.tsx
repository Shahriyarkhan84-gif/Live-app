import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { InfoListCard } from '@/components/InfoListCard';
import { Header } from '@/components/Header';
import { StatCard } from '@/components/StatCard';
import { ActivityItem } from '@/constants/architecture';
import { colors } from '@/constants/colors';
import { config } from '@/constants/config';

const roomChecklist: ActivityItem[] = [
  { title: 'Room setup', detail: 'Choose title, category, privacy, cover image, and moderator rules.' },
  { title: 'Broadcast prep', detail: `Validate camera, microphone, and bandwidth for ${config.streamQuality} delivery.` },
  { title: 'Safety checks', detail: 'Enable word filters, reporting entry points, and room-specific moderation roles.' },
  { title: 'Go-live path', detail: 'Issue room ID, stream ID, stream key, and analytics session identifiers.' },
];

export default function CreateScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Header title="Create a live room" subtitle="Model the creator workflow from setup to ingest, moderation, and analytics." />
      <View style={styles.metricsRow}>
        <StatCard label="Stream quality" value={config.streamQuality} tone="accent" />
        <StatCard label="Privacy modes" value="3" tone="primary" />
        <StatCard label="Moderator roles" value="4" tone="danger" />
      </View>
      <InfoListCard title="Room creation pipeline" items={roomChecklist} />
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
