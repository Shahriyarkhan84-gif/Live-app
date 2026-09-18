import { Tabs } from 'expo-router';
import { Text } from 'react-native';

import { colors } from '@/constants/colors';

const TAB_ICONS = {
  create: '⬤',
  discover: '◎',
  index: '◉',
  messages: '◌',
  profile: '◍',
} as const;

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        animation: 'shift',
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.text,
        sceneStyle: { backgroundColor: colors.background },
        tabBarStyle: {
          position: 'absolute',
          left: 16,
          right: 16,
          bottom: 18,
          height: 76,
          borderTopWidth: 0,
          borderWidth: 1,
          borderColor: colors.border,
          borderRadius: 28,
          backgroundColor: colors.cardAlt,
          paddingTop: 10,
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '800',
          letterSpacing: 0.6,
        },
        tabBarActiveTintColor: colors.accentSoft,
        tabBarInactiveTintColor: colors.muted,
        tabBarIcon: ({ color }) => (
          <Text accessible={false} style={{ color, fontSize: route.name === 'create' ? 20 : 18, fontWeight: '800' }}>
            {TAB_ICONS[route.name as keyof typeof TAB_ICONS]}
          </Text>
        ),
      })}>
      <Tabs.Screen name="index" options={{ title: 'HOME', tabBarAccessibilityLabel: 'Home tab' }} />
      <Tabs.Screen name="discover" options={{ title: 'DISCOVERY', tabBarAccessibilityLabel: 'Discovery tab' }} />
      <Tabs.Screen name="create" options={{ title: 'GO LIVE', tabBarAccessibilityLabel: 'Go live tab' }} />
      <Tabs.Screen name="messages" options={{ title: 'MESSAGES', tabBarAccessibilityLabel: 'Messages tab' }} />
      <Tabs.Screen name="profile" options={{ title: 'ME', tabBarAccessibilityLabel: 'Me tab' }} />
    </Tabs>
  );
}
