import { Pressable, StyleSheet, Text } from 'react-native';

import { colors } from '@/constants/colors';

export function GiftButton({ label }: { label: string }) {
  return (
    <Pressable accessibilityLabel={label} accessibilityRole="button" style={styles.button}>
      <Text style={styles.text}>🎁 {label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-start',
    backgroundColor: colors.accent,
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  text: {
    color: colors.background,
    fontWeight: '700',
  },
});
