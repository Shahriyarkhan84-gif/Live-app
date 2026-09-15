import { Stack } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Header } from '@/components/Header';
import { colors } from '@/constants/colors';
import { usePlatformData } from '@/hooks/usePlatformData';

export default function AdminScreen() {
  const { adminModules } = usePlatformData();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Stack.Screen options={{ headerShown: true, title: 'Admin' }} />
      <Header title="Admin dashboard" subtitle="Centralize growth, safety, economy, and operational control surfaces." />
      {adminModules.map((module) => (
        <View key={module.title} style={styles.card}>
          <Text style={styles.title}>{module.title}</Text>
          <View style={styles.pills}>
            {module.items.map((item) => (
              <View key={item} style={styles.pill}>
                <Text style={styles.pillText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 20,
    gap: 18,
  },
  card: {
    gap: 14,
    borderRadius: 20,
    backgroundColor: colors.card,
    padding: 18,
  },
  title: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  pills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  pill: {
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  pillText: {
    color: colors.text,
    fontWeight: '600',
  },
});
