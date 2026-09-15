import { SymbolView } from 'expo-symbols';
import { Tabs } from 'expo-router';

import { colors } from '@/constants/colors';

const TAB_ICONS = {
  index: { ios: 'house.fill', android: 'home', web: 'home' },
  discover: { ios: 'sparkles', android: 'search', web: 'search' },
  create: { ios: 'plus.square.fill', android: 'add_box', web: 'add_box' },
  messages: { ios: 'message.fill', android: 'chat', web: 'chat' },
  profile: { ios: 'person.fill', android: 'person', web: 'person' },
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
          <SymbolView name={TAB_ICONS[route.name as keyof typeof TAB_ICONS]} size={22} tintColor={color} />
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
