import { Stack } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Header } from '@/components/Header';
import { colors } from '@/constants/colors';
import { useChat } from '@/hooks/useChat';

export default function FriendsScreen() {
  const { conversations } = useChat();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Stack.Screen options={{ headerShown: true, title: 'Friends' }} />
      <Header title="Friends" subtitle="Mutual follows become friends and unlock private messaging according to app rules." />
      {conversations.map((conversation) => (
        <View key={conversation.id} style={styles.card}>
          <Text style={styles.name}>{conversation.name}</Text>
          <Text style={styles.meta}>{conversation.handle} · {conversation.relationship}</Text>
          <Text style={styles.message}>{conversation.lastMessage}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { gap: 12, padding: 20 },
  card: { gap: 6, borderRadius: 22, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.card, padding: 16 },
  name: { color: colors.text, fontWeight: '800' },
  meta: { color: colors.accentSoft, fontSize: 12 },
  message: { color: colors.muted, lineHeight: 20 },
});
