import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colors';

export function VideoPlayer({ title, host, viewers }: { title: string; host: string; viewers: number }) {
  return (
    <View style={styles.container}>
      <View style={styles.videoArea}>
        <Text style={styles.liveBadge}>LIVE</Text>
        <Text style={styles.preview}>Video stream preview</Text>
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
    gap: 10,
  },
  videoArea: {
    height: 220,
    borderRadius: 24,
    backgroundColor: '#111827',
    padding: 16,
    justifyContent: 'space-between',
  },
  liveBadge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.danger,
    color: colors.text,
    borderRadius: 999,
    overflow: 'hidden',
    paddingHorizontal: 10,
    paddingVertical: 6,
    fontWeight: '700',
  },
  preview: {
    color: colors.muted,
    textAlign: 'center',
  },
  title: {
    color: colors.text,
    fontSize: 24,
    fontWeight: '700',
  },
  meta: {
    color: colors.muted,
    fontSize: 15,
  },
});
