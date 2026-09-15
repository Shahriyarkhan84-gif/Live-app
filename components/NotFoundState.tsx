import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colors';

export function NotFoundState({ message = "This screen doesn't exist." }: { message?: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{message}</Text>
      <Link href="/login" asChild>
        <Pressable accessibilityRole="link" style={styles.link}>
          <Text style={styles.linkText}>Go to login</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: colors.primary,
  },
});
