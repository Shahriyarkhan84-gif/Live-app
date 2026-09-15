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
          <Text accessible={false} style={{ color, fontSize: 18 }}>
            {TAB_ICONS[route.name as keyof typeof TAB_ICONS]}
          </Text>
        ),
      })}>
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarAccessibilityLabel: 'Home tab' }} />
      <Tabs.Screen name="discover" options={{ title: 'Discover', tabBarAccessibilityLabel: 'Discover tab' }} />
      <Tabs.Screen name="create" options={{ title: 'Create', tabBarAccessibilityLabel: 'Create tab' }} />
      <Tabs.Screen name="messages" options={{ title: 'Messages', tabBarAccessibilityLabel: 'Messages tab' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarAccessibilityLabel: 'Profile tab' }} />
    </Tabs>
  );
}
