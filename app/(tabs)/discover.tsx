import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Header } from '@/components/Header';
import { LiveCard } from '@/components/LiveCard';
import { colors } from '@/constants/colors';
import { useLiveRoom } from '@/hooks/useLiveRoom';

export default function DiscoverScreen() {
  const { featuredRooms, categories } = useLiveRoom();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Header title="Discover" subtitle="Browse live rooms by topic" />
      <View style={styles.categoryRow}>
        {categories.map((category) => (
          <View key={category} style={styles.categoryPill}>
            <Text style={styles.categoryText}>{category}</Text>
          </View>
        ))}
      </View>
      {featuredRooms.map((room) => (
        <LiveCard key={room.id} room={room} />
      ))}
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
  categoryRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  categoryPill: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
  },
  categoryText: {
    color: colors.text,
    fontWeight: '600',
  },
});
