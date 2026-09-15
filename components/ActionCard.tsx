import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colors';

export function ActionCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link href={href} asChild>
      <Pressable accessibilityLabel={`${title}. ${description}`} accessibilityRole="link" style={styles.card}>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <Text style={styles.arrow}>→</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    padding: 18,
  },
  content: {
    flex: 1,
    gap: 6,
  },
  title: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '700',
  },
  description: {
    color: colors.muted,
    lineHeight: 20,
  },
  arrow: {
    color: colors.primary,
    fontSize: 22,
    fontWeight: '700',
  },
});
