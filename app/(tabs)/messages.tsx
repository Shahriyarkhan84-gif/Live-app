import { ScrollView, StyleSheet } from 'react-native';

import { ChatBox } from '@/components/ChatBox';
import { Header } from '@/components/Header';
import { InfoListCard } from '@/components/InfoListCard';
import { colors } from '@/constants/colors';
import { useChat } from '@/hooks/useChat';

const realtimeEvents = [
  { title: 'Chat message', detail: 'Authenticated users publish messages through the WebSocket gateway.', meta: 'room event' },
  { title: 'Presence changes', detail: 'Join, leave, and viewer counts update in real time with rate limits.', meta: 'presence' },
  { title: 'Social reactions', detail: 'Likes and follows fan out alongside room activity.', meta: 'engagement' },
  { title: 'Coin and gift events', detail: 'Wallet deductions and gift moments render instantly in-room.', meta: 'economy' },
];

export default function MessagesScreen() {
  const { messages } = useChat();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Header title="Realtime chat" subtitle="Track the WebSocket and moderation path that powers room conversations." />
      <ChatBox messages={messages} />
      <InfoListCard title="Realtime event model" items={realtimeEvents} />
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
