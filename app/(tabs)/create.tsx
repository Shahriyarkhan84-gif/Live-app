import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Header } from '@/components/Header';
import { colors } from '@/constants/colors';
import { config } from '@/constants/config';

export default function CreateScreen() {
  return (
    <View style={styles.screen}>
      <Header title="Create a live room" subtitle="Prepare your stream before you go live" />
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Streaming checklist</Text>
        <Text style={styles.item}>• Camera and microphone permissions</Text>
        <Text style={styles.item}>• Room title and category</Text>
        <Text style={styles.item}>• Stable connection for {config.streamQuality}</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Start preview</Text>
        </Pressable>
      </View>
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
  card: {
    backgroundColor: colors.card,
    borderRadius: 20,
    padding: 20,
    gap: 14,
  },
  cardTitle: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '700',
  },
  item: {
    color: colors.text,
    fontSize: 16,
  },
  button: {
    marginTop: 8,
    backgroundColor: colors.primary,
    borderRadius: 14,
    alignItems: 'center',
    paddingVertical: 14,
  },
  buttonText: {
    color: colors.background,
    fontWeight: '700',
  },
});
