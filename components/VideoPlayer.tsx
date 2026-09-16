import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colors';

export function VideoPlayer({ title, host, viewers }: { title: string; host: string; viewers: number }) {
  return (
    <View style={styles.container}>
      <View style={styles.videoArea}>
        <View style={styles.topRow}>
          <Text style={styles.liveBadge}>LIVE</Text>
          <Text style={styles.viewerBadge}>{viewers.toLocaleString()} viewers</Text>
        </View>
        <View style={styles.centerCopy}>
          <Text style={styles.previewEyebrow}>Realtime video pipeline</Text>
          <Text style={styles.preview}>Camera → ingest → media cluster → CDN</Text>
        </View>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.meta}>
        {host} · {viewers.toLocaleString()} viewers
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  videoArea: {
    height: 240,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.backgroundSoft,
    padding: 18,
    justifyContent: 'space-between',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  liveBadge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.danger,
    color: colors.text,
    borderRadius: 999,
    overflow: 'hidden',
    paddingHorizontal: 10,
    paddingVertical: 6,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  viewerBadge: {
    backgroundColor: colors.overlay,
    color: colors.text,
    borderRadius: 999,
    overflow: 'hidden',
    paddingHorizontal: 10,
    paddingVertical: 6,
    fontWeight: '700',
  },
  centerCopy: {
    gap: 8,
    alignItems: 'center',
  },
  previewEyebrow: {
    color: colors.accentSoft,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
  preview: {
    color: colors.text,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: -0.4,
  },
  title: {
    color: colors.text,
    fontSize: 24,
    fontWeight: '800',
  },
  meta: {
    color: colors.muted,
    fontSize: 15,
  },
});
