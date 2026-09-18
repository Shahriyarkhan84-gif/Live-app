import { useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';

import { ChatBox } from '@/components/ChatBox';
import { Header } from '@/components/Header';
import { InfoListCard } from '@/components/InfoListCard';
import { SkeletonBlock } from '@/components/SkeletonBlock';
import { colors } from '@/constants/colors';
import { useChat } from '@/hooks/useChat';

export default function MessagesScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const { conversations, messages, privateChatRules, isLoading, refetch } = useChat();

  const handleRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} tintColor={colors.accent} />}>
      <Header title="Messages" subtitle="Private chats are realtime and unlock when the required follow or friend relationship exists." />

      <View style={styles.friendStrip}>
        {conversations.map((conversation) => (
          <View key={conversation.id} style={styles.friendBubble}>
            <Text style={styles.friendName}>{conversation.name}</Text>
            <Text style={styles.friendMeta}>{conversation.relationship}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Conversations</Text>
        {isLoading ? (
          <SkeletonBlock height={180} />
        ) : (
          conversations.map((conversation) => (
            <View key={conversation.id} style={styles.conversationCard}>
              <View style={styles.conversationHeader}>
                <View>
                  <Text style={styles.conversationName}>{conversation.name}</Text>
                  <Text style={styles.conversationHandle}>{conversation.handle}</Text>
                </View>
                <Text style={styles.conversationStatus}>{conversation.online ? 'Online' : 'Offline'}</Text>
              </View>
              <Text style={styles.conversationMessage}>{conversation.lastMessage}</Text>
              {conversation.unreadCount > 0 ? <Text style={styles.unread}>{conversation.unreadCount} unread</Text> : null}
            </View>
          ))
        )}
      </View>

      <ChatBox messages={messages} />
      <InfoListCard title="Private chat rules" items={privateChatRules} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { gap: 18, padding: 20, paddingBottom: 120 },
  friendStrip: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  friendBubble: { borderRadius: 18, backgroundColor: colors.cardAlt, paddingHorizontal: 14, paddingVertical: 12 },
  friendName: { color: colors.text, fontWeight: '800' },
  friendMeta: { color: colors.muted, fontSize: 12, marginTop: 2 },
  section: { gap: 12 },
  sectionTitle: { color: colors.text, fontSize: 18, fontWeight: '800' },
  conversationCard: { gap: 8, borderRadius: 24, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.card, padding: 18 },
  conversationHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  conversationName: { color: colors.text, fontSize: 16, fontWeight: '800' },
  conversationHandle: { color: colors.muted, fontSize: 12 },
  conversationStatus: { color: colors.accentSoft, fontSize: 12, fontWeight: '700' },
  conversationMessage: { color: colors.text, lineHeight: 20 },
  unread: { color: colors.primarySoft, fontSize: 12, fontWeight: '800' },
});
