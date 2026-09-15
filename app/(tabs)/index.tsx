import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { GiftButton } from '@/components/GiftButton';
import { Header } from '@/components/Header';
import { LiveCard } from '@/components/LiveCard';
import { colors } from '@/constants/colors';
import { useLiveRoom } from '@/hooks/useLiveRoom';

export default function HomeScreen() {
  const { featuredRooms } = useLiveRoom();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Header title="Live now" subtitle="Featured creators and trending rooms" />
      {featuredRooms.map((room) => (
        <LiveCard key={room.id} room={room} />
      ))}
      <View style={styles.walletCard}>
        <Text style={styles.walletLabel}>Wallet balance</Text>
        <Text style={styles.walletValue}>420 coins</Text>
        <GiftButton label="Send a featured gift" />
      </View>
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
  walletCard: {
    backgroundColor: colors.card,
    borderRadius: 20,
    padding: 20,
    gap: 10,
  },
  walletLabel: {
    color: colors.muted,
    fontSize: 14,
  },
  walletValue: {
    color: colors.text,
    fontSize: 28,
    fontWeight: '700',
  },
});
