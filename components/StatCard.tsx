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
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, { color: toneMap[tone] }]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minWidth: 140,
    gap: 8,
    borderRadius: 18,
    backgroundColor: colors.card,
    padding: 16,
  },
  label: {
    color: colors.muted,
    fontSize: 13,
  },
  value: {
    fontSize: 24,
    fontWeight: '700',
  },
});
