import { Stack } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';

import { Header } from '@/components/Header';
import { InfoListCard } from '@/components/InfoListCard';
import { colors } from '@/constants/colors';
import { usePlatformData } from '@/hooks/usePlatformData';

export default function HelpScreen() {
  const { securityChecklist = [] } = usePlatformData();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Stack.Screen options={{ headerShown: true, title: 'Help' }} />
      <Header title="Help" subtitle="Support the app with secure onboarding, protected media flows, and wallet-aware operations." />
      <InfoListCard title="Security and support guidance" items={securityChecklist} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { gap: 18, padding: 20 },
});
