import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming } from 'react-native-reanimated';

import { colors } from '@/constants/colors';

export function SkeletonBlock({ height = 100 }: { height?: number }) {
  const opacity = useSharedValue(0.45);

  useEffect(() => {
    opacity.value = withRepeat(withSequence(withTiming(0.75, { duration: 700 }), withTiming(0.45, { duration: 700 })), -1, false);
  }, [opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return <Animated.View style={[styles.block, { height }, animatedStyle]} />;
}

const styles = StyleSheet.create({
  block: {
    borderRadius: 22,
    backgroundColor: colors.cardAlt,
    borderWidth: 1,
    borderColor: colors.border,
  },
});
