import { Stack } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { ActionCard } from '@/components/ActionCard';
import { Header } from '@/components/Header';
import { InfoListCard } from '@/components/InfoListCard';
import { colors } from '@/constants/colors';
import { useLiveRoom } from '@/hooks/useLiveRoom';
import { usePlatformData } from '@/hooks/usePlatformData';

export default function SearchScreen() {
  const { categories } = useLiveRoom();
  const { lessonRoadmap } = usePlatformData();

  const discoverySignals = [
    { title: 'Watch time', detail: 'Rank streams by retention, session depth, and recent activity.', meta: 'ranking' },
    { title: 'Category affinity', detail: 'Promote rooms based on a viewer’s favorite content domains.', meta: 'personalization' },
    { title: 'Social graph', detail: 'Boost creators followed by friends or past gifting activity.', meta: 'social' },
    { title: 'Live freshness', detail: 'Surface newly started rooms to balance recency and quality.', meta: 'exploration' },
  ];

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Stack.Screen options={{ headerShown: true, title: 'Search' }} />
      <Header title="Search and recommendations" subtitle="Translate viewer activity into discoverability, search results, and home-feed ranking." />
      <View style={styles.categoryRow}>
        {categories.map((category) => (
          <View key={category} style={styles.categoryPill}>
            <Text style={styles.categoryText}>{category}</Text>
          </View>
        ))}
      </View>
      <InfoListCard title="Discovery signals" items={discoverySignals} />
      <ActionCard title="Open notifications" description="See how search outcomes lead to push and in-app engagement loops." href="/notifications" />
      <ActionCard title="Open creator dashboard" description="Review how recommendations convert into growth and earnings metrics." href="/creator-dashboard" />
      <Text style={styles.caption}>Connected lesson range: {lessonRoadmap[8]?.id}–{lessonRoadmap[12]?.id}</Text>
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
  categoryRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  categoryPill: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
  },
  categoryText: {
    color: colors.text,
    fontWeight: '600',
  },
  caption: {
    color: colors.muted,
    fontSize: 13,
  },
});
