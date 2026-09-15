import { Redirect, Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { ChatBox } from '@/components/ChatBox';
import { GiftButton } from '@/components/GiftButton';
import { VideoPlayer } from '@/components/VideoPlayer';
import { colors } from '@/constants/colors';
import { useChat } from '@/hooks/useChat';
import { useLiveRoom } from '@/hooks/useLiveRoom';

export default function LiveRoomScreen() {
  const { roomId } = useLocalSearchParams<{ roomId: string }>();
  const { getRoomById } = useLiveRoom();
  const { messages } = useChat();
  const room = getRoomById(roomId ?? '');

  if (!room) {
    return <Redirect href="/+not-found" />;
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Stack.Screen options={{ title: room.title }} />
      <VideoPlayer title={room.title} host={room.host} viewers={room.viewers} />
      <View style={styles.section}>
        <Text style={styles.heading}>Live chat</Text>
        <ChatBox messages={messages} />
      </View>
      <GiftButton label="Send a gift" />
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
  section: {
    gap: 12,
  },
  heading: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '700',
  },
});
