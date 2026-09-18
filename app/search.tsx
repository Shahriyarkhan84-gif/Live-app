import { Stack } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { ActionCard } from '@/components/ActionCard';
import { Header } from '@/components/Header';
import { colors } from '@/constants/colors';
import { useLiveRoom } from '@/hooks/useLiveRoom';

export default function SearchScreen() {
  const { countries, categories } = useLiveRoom();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Stack.Screen options={{ headerShown: true, title: 'Search' }} />
      <Header title="Search" subtitle="Search across hosts, users, countries, categories, and live rooms." />
      <View style={styles.searchCard}>
        <Text style={styles.searchLine}>Hosts • Users • Countries • Categories • Live rooms</Text>
        <Text style={styles.searchHint}>Use discovery filters to move from global browsing to country and category detail quickly.</Text>
      </View>
      <View style={styles.grid}>
        {countries.slice(0, 6).map((country) => (
          <View key={country.code} style={styles.tile}>
            <Text style={styles.tileTitle}>{country.flag} {country.name}</Text>
            <Text style={styles.tileMeta}>{country.liveCount} live now</Text>
          </View>
        ))}
        {categories.slice(0, 4).map((category) => (
          <View key={category.slug} style={styles.tile}>
            <Text style={styles.tileTitle}>{category.icon} {category.name}</Text>
            <Text style={styles.tileMeta}>{category.liveCount} live</Text>
          </View>
        ))}
      </View>
      <ActionCard title="View all countries" description="Country-based live discovery for local and global audiences." href="/countries" />
      <ActionCard title="View all categories" description="Music, gaming, chat, entertainment, sports, and more." href="/categories" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { gap: 18, padding: 20 },
  searchCard: { gap: 8, borderRadius: 26, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.cardAlt, padding: 18 },
  searchLine: { color: colors.text, fontSize: 18, fontWeight: '800' },
  searchHint: { color: colors.muted, lineHeight: 22 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  tile: { width: '48%', gap: 6, borderRadius: 20, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.card, padding: 16 },
  tileTitle: { color: colors.text, fontWeight: '800' },
  tileMeta: { color: colors.muted, fontSize: 12 },
});
