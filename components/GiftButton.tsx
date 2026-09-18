import { Pressable, StyleSheet, Text } from 'react-native';

import { colors } from '@/constants/colors';

export function GiftButton({ label }: { label: string }) {
  return (
    <Pressable accessibilityLabel={label} accessibilityRole="button" style={styles.button}>
      <Text style={styles.text}>✦ {label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-start',
    borderRadius: 999,
    backgroundColor: colors.accent,
    paddingHorizontal: 18,
    paddingVertical: 12,
    shadowColor: colors.accent,
    shadowOpacity: 0.24,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  text: {
    color: colors.background,
    fontWeight: '800',
  },
});
