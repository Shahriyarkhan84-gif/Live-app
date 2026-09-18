import { Stack } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';

import { ActionCard } from '@/components/ActionCard';
import { Header } from '@/components/Header';
import { InfoListCard } from '@/components/InfoListCard';
import { colors } from '@/constants/colors';
import { usePlatformData } from '@/hooks/usePlatformData';

export default function SettingsScreen() {
  const { securityChecklist = [], settingsLinks = [] } = usePlatformData();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Stack.Screen options={{ headerShown: true, title: 'Settings' }} />
      <Header title="Settings" subtitle="Account, privacy, security, notifications, blocked users, wallet, earnings, help, and logout." />
      <InfoListCard title="Security checklist" items={securityChecklist} />
      {settingsLinks.map((item) => (
        <ActionCard key={item.title} title={item.title} description={item.caption} href={item.href} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { gap: 18, padding: 20 },
});
