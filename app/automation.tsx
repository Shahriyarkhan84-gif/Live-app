import { Stack } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Header } from '@/components/Header';
import { InfoListCard } from '@/components/InfoListCard';
import { colors } from '@/constants/colors';
import { usePlatformData } from '@/hooks/usePlatformData';

export default function AutomationScreen() {
  const { automationWorkflows = [], platformLayers = [] } = usePlatformData();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Stack.Screen options={{ headerShown: true, title: 'n8n Automation' }} />
      <Header title="n8n automation" subtitle="Use n8n selectively for notifications, reports, analytics, moderation alerts, and admin workflows." />
      <InfoListCard title="Workflow map" items={automationWorkflows} />
      {platformLayers.map((layer) => (
        <View key={layer.title} style={styles.card}>
          <Text style={styles.title}>{layer.title}</Text>
          <Text style={styles.items}>{layer.items.join(' • ')}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { gap: 18, padding: 20 },
  card: { gap: 6, borderRadius: 22, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.card, padding: 16 },
  title: { color: colors.text, fontWeight: '800', textTransform: 'capitalize' },
  items: { color: colors.muted, lineHeight: 20 },
});
