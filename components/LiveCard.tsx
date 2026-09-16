import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import { UserAvatar } from '@/components/UserAvatar';

type LiveRoom = {
  id: string;
  title: string;
  host: string;
  category: string;
  viewers: number;
};

export function LiveCard({ room }: { room: LiveRoom }) {
  return (
    <Link href={`/live/${room.id}`} asChild>
      <Pressable
        accessibilityLabel={`${room.title} hosted by ${room.host}, category ${room.category}, ${room.viewers.toLocaleString()} viewers`}
        accessibilityRole="link"
        style={styles.card}>
        <View style={styles.preview}>
          <View style={styles.previewTopRow}>
            <Text style={styles.livePill}>LIVE</Text>
            <Text style={styles.viewerPill}>{room.viewers.toLocaleString()} watching</Text>
          </View>
          <Text style={styles.previewLabel}>{room.category}</Text>
        </View>
        <View style={styles.row}>
          <UserAvatar name={room.host} />
          <View style={styles.meta}>
            <Text style={styles.title}>{room.title}</Text>
            <Text style={styles.subtitle}>{room.host}</Text>
          </View>
          <Text style={styles.badge}>{room.category}</Text>
        </View>
        <Text style={styles.footer}>{room.viewers.toLocaleString()} viewers watching now</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: 16,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    overflow: 'hidden',
    padding: 16,
  },
  preview: {
    height: 148,
    borderRadius: 18,
    backgroundColor: colors.backgroundSoft,
    padding: 16,
    justifyContent: 'space-between',
  },
  previewTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  livePill: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 999,
    backgroundColor: colors.danger,
    color: colors.text,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  viewerPill: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: colors.overlay,
    color: colors.text,
    fontSize: 12,
    fontWeight: '700',
  },
  previewLabel: {
    color: colors.accentSoft,
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: -0.4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  meta: {
    flex: 1,
    gap: 4,
  },
  title: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '800',
  },
  subtitle: {
    color: colors.muted,
  },
  badge: {
    color: colors.primarySoft,
    backgroundColor: 'rgba(139, 92, 246, 0.12)',
    overflow: 'hidden',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    fontWeight: '700',
  },
  footer: {
    color: colors.muted,
    fontSize: 13,
  },
});
