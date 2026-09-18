import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming } from 'react-native-reanimated';

import { colors } from '@/constants/colors';

export function LiveBadge() {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(0.75);

  useEffect(() => {
    scale.value = withRepeat(withSequence(withTiming(1.12, { duration: 900 }), withTiming(1, { duration: 900 })), -1, false);
    opacity.value = withRepeat(withSequence(withTiming(1, { duration: 900 }), withTiming(0.7, { duration: 900 })), -1, false);
  }, [opacity, scale]);

  const pulseStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  return (
    <View style={styles.badge}>
      <Animated.View style={[styles.pulse, pulseStyle]} />
      <Text style={styles.text}>LIVE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    alignSelf: 'flex-start',
    borderRadius: 999,
    backgroundColor: 'rgba(239, 68, 68, 0.14)',
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  pulse: {
    width: 8,
    height: 8,
    borderRadius: 999,
    backgroundColor: colors.danger,
  },
  text: {
    color: colors.text,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.6,
  },
});
