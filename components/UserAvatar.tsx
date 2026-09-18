import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colors';

export function UserAvatar({ name, size = 48 }: { name: string; size?: number }) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <View style={[styles.ring, { width: size + 8, height: size + 8, borderRadius: (size + 8) / 2 }]}>
      <View style={[styles.avatar, { width: size, height: size, borderRadius: size / 2 }]}>
        <Text style={[styles.text, { fontSize: size / 2.5 }]}>{initials}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ring: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(139, 92, 246, 0.14)',
  },
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  text: {
    color: colors.background,
    fontWeight: '700',
  },
});
