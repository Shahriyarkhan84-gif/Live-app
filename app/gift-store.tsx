import { Stack } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';

import { Header } from '@/components/Header';
import { InfoListCard } from '@/components/InfoListCard';
import { colors } from '@/constants/colors';
import { usePlatformData } from '@/hooks/usePlatformData';

export default function GiftStoreScreen() {
  const { giftCatalog } = usePlatformData();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Stack.Screen options={{ headerShown: true, title: 'Gift Store' }} />
      <Header title="Gift store" subtitle="Map coins to monetization moments, on-stream animation, and creator earnings." />
      <InfoListCard title="Gift catalog" items={giftCatalog} />
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
});
