import { Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { ChatBox } from '@/components/ChatBox';
import { GiftButton } from '@/components/GiftButton';
import { LiveBadge } from '@/components/LiveBadge';
import { NotFoundState } from '@/components/NotFoundState';
import { colors } from '@/constants/colors';
import { useChat } from '@/hooks/useChat';
import { useLiveRoom } from '@/hooks/useLiveRoom';

export default function LiveRoomScreen() {
  const { roomId } = useLocalSearchParams<{ roomId: string }>();
  const { getRoomById } = useLiveRoom();
  const { messages } = useChat();
  const room = getRoomById(roomId ?? '');

  if (!room) {
    return (
      <>
        <Stack.Screen options={{ headerShown: true, title: 'Live room' }} />
        <NotFoundState message="This live room is unavailable." />
      </>
    );
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Stack.Screen options={{ headerShown: true, title: room.hostName }} />
      <View style={[styles.videoStage, { backgroundColor: room.thumbnailTone }]}>
        <View style={styles.videoTopRow}>
          <View style={styles.hostRow}>
            <LiveBadge />
            <Text style={styles.hostName}>{room.hostName}</Text>
            <Text style={styles.hostMeta}>{room.countryFlag} {room.countryName}</Text>
          </View>
          <Text style={styles.viewerPill}>{room.viewerCount.toLocaleString()} viewers</Text>
        </View>
        <View style={styles.videoBottomRow}>
          <Text style={styles.roomTitle}>{room.title}</Text>
          <Text style={styles.roomMeta}>{room.category} · {room.liveDuration}</Text>
        </View>
      </View>

      <View style={styles.controlsRow}>
        <Text style={styles.control}>Follow</Text>
        <Text style={styles.control}>Gift</Text>
        <Text style={styles.control}>Share</Text>
        <Text style={styles.control}>More</Text>
      </View>

      <ChatBox messages={messages} />

      <View style={styles.inputRow}>
        <TextInput placeholder="Send a message" placeholderTextColor={colors.muted} style={styles.input} />
        <GiftButton label="Send Gift" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { gap: 16, padding: 20, paddingBottom: 40 },
  videoStage: { height: 360, borderRadius: 30, padding: 18, justifyContent: 'space-between' },
  videoTopRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10 },
  hostRow: { gap: 8 },
  hostName: { color: colors.text, fontSize: 20, fontWeight: '800' },
  hostMeta: { color: colors.text, fontSize: 13, fontWeight: '700' },
  viewerPill: { borderRadius: 999, backgroundColor: 'rgba(7, 11, 20, 0.35)', color: colors.text, overflow: 'hidden', paddingHorizontal: 12, paddingVertical: 7, fontWeight: '700' },
  videoBottomRow: { gap: 6 },
  roomTitle: { color: colors.text, fontSize: 28, fontWeight: '800' },
  roomMeta: { color: colors.text, fontSize: 14 },
  controlsRow: { flexDirection: 'row', justifyContent: 'space-between', gap: 10 },
  control: { flex: 1, overflow: 'hidden', borderRadius: 16, backgroundColor: colors.cardAlt, color: colors.text, paddingVertical: 12, textAlign: 'center', fontWeight: '700' },
  inputRow: { gap: 12 },
  input: { borderRadius: 18, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.cardAlt, color: colors.text, paddingHorizontal: 16, paddingVertical: 14 },
});
