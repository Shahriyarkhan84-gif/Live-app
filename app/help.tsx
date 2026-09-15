import { Stack } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';

import { Header } from '@/components/Header';
import { InfoListCard } from '@/components/InfoListCard';
import { colors } from '@/constants/colors';
import { usePlatformData } from '@/hooks/usePlatformData';

export default function HelpScreen() {
  const { testingStages } = usePlatformData();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Stack.Screen options={{ headerShown: true, title: 'Help' }} />
      <Header title="Testing and launch help" subtitle="Keep quality gates visible before shipping auth, realtime, media, and payment features." />
      <InfoListCard title="Testing stages" items={testingStages} />
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
