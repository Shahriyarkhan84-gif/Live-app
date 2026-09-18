import { PropsWithChildren, useEffect } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming } from 'react-native-reanimated';

import { colors } from '@/constants/colors';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function GoLiveButton({ children, onPress }: PropsWithChildren<{ onPress?: () => void }>) {
  const scale = useSharedValue(1);

  useEffect(() => {
    scale.value = withRepeat(withSequence(withTiming(1.03, { duration: 900 }), withTiming(1, { duration: 900 })), -1, false);
  }, [scale]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <AnimatedPressable accessibilityRole="button" onPress={onPress} style={[styles.button, animatedStyle]}>
      <Text style={styles.text}>{children}</Text>
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
    backgroundColor: colors.primary,
    paddingVertical: 16,
    shadowColor: colors.primary,
    shadowOpacity: 0.3,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 6,
  },
  text: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
});
