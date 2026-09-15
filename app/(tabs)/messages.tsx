import { StyleSheet, View } from 'react-native';

import { ChatBox } from '@/components/ChatBox';
import { Header } from '@/components/Header';
import { colors } from '@/constants/colors';
import { useChat } from '@/hooks/useChat';

export default function MessagesScreen() {
  const { messages } = useChat();

  return (
    <View style={styles.screen}>
      <Header title="Messages" subtitle="Recent community conversations" />
      <ChatBox messages={messages} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    gap: 16,
  },
});
