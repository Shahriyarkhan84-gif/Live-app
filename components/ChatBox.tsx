import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colors';

export function ChatBox({ messages }: { messages: Array<{ id: string; author: string; text: string }> }) {
  return (
    <View style={styles.container}>
      {messages.map((message) => (
        <View key={message.id} style={styles.messageRow}>
          <Text style={styles.author}>{message.author}</Text>
          <Text style={styles.text}>{message.text}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
    borderRadius: 20,
    backgroundColor: colors.card,
    padding: 18,
  },
  messageRow: {
    gap: 4,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
    paddingBottom: 10,
  },
  author: {
    color: colors.accent,
    fontWeight: '700',
  },
  text: {
    color: colors.text,
    lineHeight: 20,
  },
});
