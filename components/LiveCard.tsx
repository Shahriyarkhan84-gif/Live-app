import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { LiveBadge } from '@/components/LiveBadge';
import { UserAvatar } from '@/components/UserAvatar';
import type { LiveHost } from '@/constants/architecture';
import { colors } from '@/constants/colors';

export function LiveCard({ room }: { room: LiveHost }) {
  return (
    <Link href={`/live/${room.id}`} asChild>
      <Pressable
        accessibilityLabel={`${room.hostName} live in ${room.countryName}, ${room.category}, ${room.viewerCount.toLocaleString()} viewers`}
        accessibilityRole="link"
        style={styles.card}>
        <View style={[styles.preview, { backgroundColor: room.thumbnailTone }]}>
          <View style={styles.previewTopRow}>
            <LiveBadge />
            <Text style={styles.viewerPill}>{room.viewerCount.toLocaleString()} viewers</Text>
          </View>
          <View style={styles.previewBottom}>
            <Text style={styles.countryText}>
              {room.countryFlag} {room.countryName}
            </Text>
            <Text style={styles.previewTitle}>{room.title}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <UserAvatar name={room.hostName} />
          <View style={styles.meta}>
            <Text style={styles.title}>{room.hostName}</Text>
            <Text style={styles.subtitle}>
              {room.category} · {room.liveDuration}
            </Text>
          </View>
          <View style={styles.followButton}>
            <Text style={styles.followText}>{room.isFollowing ? 'Following' : 'Follow'}</Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: 16,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    overflow: 'hidden',
    padding: 16,
  },
  preview: {
    height: 168,
    borderRadius: 20,
    padding: 16,
    justifyContent: 'space-between',
  },
  previewTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewerPill: {
    borderRadius: 999,
    backgroundColor: 'rgba(7, 11, 20, 0.35)',
    color: colors.text,
    overflow: 'hidden',
    paddingHorizontal: 12,
    paddingVertical: 7,
    fontSize: 12,
    fontWeight: '700',
  },
  previewBottom: {
    gap: 6,
  },
  countryText: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '700',
  },
  previewTitle: {
    color: colors.text,
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: -0.5,
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
    fontSize: 17,
    fontWeight: '800',
  },
  subtitle: {
    color: colors.muted,
    fontSize: 13,
  },
  followButton: {
    borderRadius: 999,
    backgroundColor: colors.overlay,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  followText: {
    color: colors.accentSoft,
    fontSize: 12,
    fontWeight: '800',
  },
});
