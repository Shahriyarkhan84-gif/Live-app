import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colors';

const toneMap = {
  accent: colors.accent,
  danger: colors.danger,
  primary: colors.primary,
};

export function StatCard({ label, value, tone = 'primary' }: { label: string; value: string; tone?: keyof typeof toneMap }) {
  return (
    <View style={styles.card}>
      <View style={[styles.glow, { backgroundColor: toneMap[tone] }]} />
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, { color: toneMap[tone] }]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minWidth: 140,
    gap: 10,
    overflow: 'hidden',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    padding: 18,
  },
  glow: {
    position: 'absolute',
    right: -16,
    top: -16,
    width: 72,
    height: 72,
    borderRadius: 36,
    opacity: 0.16,
  },
  label: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  value: {
    fontSize: 28,
    fontWeight: '800',
  },
});
