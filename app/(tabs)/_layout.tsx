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
        sceneStyle: { backgroundColor: colors.background },
        tabBarStyle: {
          position: 'absolute',
          left: 16,
          right: 16,
          bottom: 18,
          height: 72,
          borderTopWidth: 0,
          borderWidth: 1,
          borderColor: colors.border,
          borderRadius: 24,
          backgroundColor: colors.cardAlt,
          paddingTop: 10,
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '700',
        },
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
