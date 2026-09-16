import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { ActionCard } from '@/components/ActionCard';
import { Header } from '@/components/Header';
import { LessonTimeline } from '@/components/LessonTimeline';
import { colors } from '@/constants/colors';
import { useLiveRoom } from '@/hooks/useLiveRoom';
import { usePlatformData } from '@/hooks/usePlatformData';

export default function DiscoverScreen() {
  const { categories } = useLiveRoom();
  const { lessonRoadmap, quickActions } = usePlatformData();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Header title="Discover the platform" subtitle="Explore the twenty lessons that shape product, backend, safety, and growth." />
      <View style={styles.categoryRow}>
        {categories.map((category) => (
          <View key={category} style={styles.categoryPill}>
            <Text style={styles.categoryText}>{category}</Text>
          </View>
        ))}
      </View>
      <View style={styles.featureCard}>
        <Text style={styles.featureEyebrow}>Discovery design</Text>
        <Text style={styles.featureTitle}>Balance personalization, freshness, and creator quality.</Text>
      </View>
      <ActionCard title="Search, ranking, and recommendations" description="Open the discovery workbench for categories, creator search, and live feed signals." href="/search" />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Full lesson map</Text>
        <LessonTimeline lessons={lessonRoadmap} />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Connected workflows</Text>
        {quickActions.slice(0, 3).map((action) => (
          <ActionCard key={action.title} title={action.title} description={action.description} href={action.href} />
        ))}
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
    paddingBottom: 120,
    gap: 18,
  },
  section: {
    gap: 14,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '800',
  },
  featureCard: {
    borderRadius: 26,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.cardAlt,
    padding: 20,
    gap: 8,
  },
  featureEyebrow: {
    color: colors.primarySoft,
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  featureTitle: {
    color: colors.text,
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: -0.6,
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
    backgroundColor: colors.cardAlt,
    borderWidth: 1,
    borderColor: colors.border,
  },
  categoryText: {
    color: colors.text,
    fontWeight: '600',
  },
});
