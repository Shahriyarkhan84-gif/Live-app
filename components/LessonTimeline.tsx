import { StyleSheet, Text, View } from 'react-native';

import type { Lesson } from '@/constants/architecture';
import { colors } from '@/constants/colors';

export function LessonTimeline({ lessons, limit }: { lessons: Lesson[]; limit?: number }) {
  const visibleLessons = typeof limit === 'number' ? lessons.slice(0, limit) : lessons;

  return (
    <View style={styles.container}>
      {visibleLessons.map((lesson) => (
        <View key={lesson.id} style={styles.row}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{lesson.id}</Text>
          </View>
          <View style={styles.copy}>
            <Text style={styles.title}>{lesson.title}</Text>
            <Text style={styles.summary}>{lesson.summary}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 14,
  },
  row: {
    flexDirection: 'row',
    gap: 14,
    borderRadius: 20,
    backgroundColor: colors.card,
    padding: 16,
  },
  badge: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  badgeText: {
    color: colors.background,
    fontWeight: '700',
  },
  copy: {
    flex: 1,
    gap: 4,
  },
  title: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
  summary: {
    color: colors.muted,
    lineHeight: 20,
  },
});
