import { Redirect, Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { ChatBox } from '@/components/ChatBox';
import { GiftButton } from '@/components/GiftButton';
import { InfoListCard } from '@/components/InfoListCard';
import { StatCard } from '@/components/StatCard';
import { VideoPlayer } from '@/components/VideoPlayer';
import { colors } from '@/constants/colors';
import { useChat } from '@/hooks/useChat';
import { useLiveRoom } from '@/hooks/useLiveRoom';

const roomActions = [
  { title: 'Follow and share', detail: 'Help discovery systems increase reach for strong streams.', meta: 'growth' },
  { title: 'Moderation entry points', detail: 'Allow viewers to report, block, or mute abusive activity.', meta: 'safety' },
  { title: 'Gift fanout', detail: 'Broadcast coin events to the room and creator earnings engine.', meta: 'economy' },
  { title: 'Viewer analytics', detail: 'Capture watch time, retention, and category affinity signals.', meta: 'analytics' },
];

export default function LiveRoomScreen() {
  const { roomId } = useLocalSearchParams<{ roomId: string }>();
  const { getRoomById } = useLiveRoom();
  const { messages } = useChat();
  const room = getRoomById(roomId ?? '');

  if (!room) {
    return <Redirect href="/home" />;
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Stack.Screen options={{ title: room.title }} />
      <VideoPlayer title={room.title} host={room.host} viewers={room.viewers} />
      <View style={styles.metricsRow}>
        <StatCard label="Category" value={room.category} tone="accent" />
        <StatCard label="Viewers" value={room.viewers.toLocaleString()} tone="primary" />
        <StatCard label="Gifts today" value="128" tone="danger" />
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Live chat</Text>
        <ChatBox messages={messages} />
      </View>
      <GiftButton label="Send a gift" />
      <InfoListCard title="In-room event flow" items={roomActions} />
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
    gap: 16,
  },
  metricsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  section: {
    gap: 12,
  },
  heading: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '700',
  },
});
