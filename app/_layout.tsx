import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import 'react-native-reanimated';

import { AppProviders } from '@/providers/AppProviders';
import { useColorScheme } from '@/components/useColorScheme';

export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  initialRouteName: 'index',
};

export default function RootLayout() {
  return <RootNavigator />;
}

function RootNavigator() {
  const colorScheme = useColorScheme();

  return (
    <AppProviders>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ animation: 'fade', headerShown: false }} />
      </ThemeProvider>
    </AppProviders>
  );
}
