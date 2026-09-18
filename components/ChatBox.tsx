import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colors';

export function ChatBox({ messages }: { messages: Array<{ id: string; author: string; text: string }> }) {
  return (
    <View style={styles.container}>
      {messages.map((message) => (
        <View key={message.id} style={styles.messageRow}>
          <View style={styles.authorRow}>
            <View style={styles.dot} />
            <Text style={styles.author}>{message.author}</Text>
          </View>
          <Text style={styles.text}>{message.text}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    padding: 18,
  },
  messageRow: {
    gap: 6,
    borderRadius: 16,
    backgroundColor: colors.overlay,
    padding: 12,
  },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    backgroundColor: colors.accent,
  },
  author: {
    color: colors.accentSoft,
    fontWeight: '800',
  },
  text: {
    color: colors.text,
    lineHeight: 20,
  },
});
