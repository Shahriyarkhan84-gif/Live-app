import { Tabs } from 'expo-router';
import { Text } from 'react-native';

import { colors } from '@/constants/colors';

const TAB_ICONS = {
  index: '🏠',
  discover: '🔎',
  create: '🎥',
  messages: '💬',
  profile: '👤',
} as const;

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.text,
        tabBarStyle: { backgroundColor: colors.card, borderTopColor: colors.border },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.muted,
        tabBarIcon: ({ color }) => (
          <Text style={{ color, fontSize: 18 }}>{TAB_ICONS[route.name as keyof typeof TAB_ICONS]}</Text>
        ),
      })}>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="discover" options={{ title: 'Discover' }} />
      <Tabs.Screen name="create" options={{ title: 'Create' }} />
      <Tabs.Screen name="messages" options={{ title: 'Messages' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
    </Tabs>
  );
}
