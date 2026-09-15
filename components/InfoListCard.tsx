import { StyleSheet, Text, View } from 'react-native';

import type { ActivityItem } from '@/constants/architecture';
import { colors } from '@/constants/colors';

export function InfoListCard({ title, items }: { title: string; items: ActivityItem[] }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.list}>
        {items.map((item) => (
          <View key={`${title}-${item.title}`} style={styles.row}>
            <View style={styles.dot} />
            <View style={styles.copy}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.detail}>{item.detail}</Text>
              {item.meta ? <Text style={styles.meta}>{item.meta}</Text> : null}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: 14,
    borderRadius: 20,
    backgroundColor: colors.card,
    padding: 18,
  },
  title: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '700',
  },
  list: {
    gap: 14,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  dot: {
    width: 10,
    height: 10,
    marginTop: 7,
    borderRadius: 999,
    backgroundColor: colors.accent,
  },
  copy: {
    flex: 1,
    gap: 3,
  },
  itemTitle: {
    color: colors.text,
    fontWeight: '700',
  },
  detail: {
    color: colors.muted,
    lineHeight: 20,
  },
  meta: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
