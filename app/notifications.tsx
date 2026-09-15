import { Stack } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';

import { Header } from '@/components/Header';
import { InfoListCard } from '@/components/InfoListCard';
import { colors } from '@/constants/colors';
import { usePlatformData } from '@/hooks/usePlatformData';

export default function NotificationsScreen() {
  const { notificationFeed } = usePlatformData();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Stack.Screen options={{ headerShown: true, title: 'Notifications' }} />
      <Header title="Notification center" subtitle="Review follower, gift, creator-live, system, and moderation events." />
      <InfoListCard title="Event feed" items={notificationFeed} />
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
