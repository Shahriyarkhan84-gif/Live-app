import { useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';

import { ActionCard } from '@/components/ActionCard';
import { Header } from '@/components/Header';
import { LiveCard } from '@/components/LiveCard';
import { SkeletonBlock } from '@/components/SkeletonBlock';
import { colors } from '@/constants/colors';
import { useLiveRoom } from '@/hooks/useLiveRoom';

export default function DiscoverScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const { countries, categories, allHosts, isLoading, refetch } = useLiveRoom();

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
      <Header title="Discovery" subtitle="Search hosts, users, countries, categories, and live rooms through a swipe-friendly global explorer." />

      <View style={styles.searchShell}>
        <Text style={styles.searchTitle}>Search hosts • users • countries • categories • live rooms</Text>
        <ActionCard title="Open search workspace" description="Jump into host, country, and category search flows." href="/search" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Countries</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipRow}>
          {countries.map((country) => (
            <View key={country.code} style={styles.countryCard}>
              <Text style={styles.countryFlag}>{country.flag}</Text>
              <Text style={styles.countryName}>{country.name}</Text>
              <Text style={styles.countryMeta}>{country.liveCount} live · {country.topCategory}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <View style={styles.categoryGrid}>
          {categories.map((category) => (
            <View key={category.slug} style={styles.categoryCard}>
              <Text style={styles.categoryIcon}>{category.icon}</Text>
              <Text style={styles.categoryName}>{category.name}</Text>
              <Text style={styles.categoryMeta}>{category.liveCount} live</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Global hosts</Text>
        {isLoading ? (
          <SkeletonBlock height={180} />
        ) : (
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.cardRow}>
            {allHosts.map((host) => (
              <View key={host.id} style={styles.cardWrap}>
                <LiveCard room={host} />
              </View>
            ))}
          </ScrollView>
        )}
      </View>

      <ActionCard title="Browse countries" description="View country-specific live hosts, popular hosts, and new creators." href="/countries" />
      <ActionCard title="Browse categories" description="Open music, gaming, chat, sports, comedy, lifestyle, and more." href="/categories" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { gap: 18, padding: 20, paddingBottom: 120 },
  searchShell: { gap: 14, borderRadius: 26, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.cardAlt, padding: 18 },
  searchTitle: { color: colors.text, fontSize: 18, fontWeight: '800', lineHeight: 25 },
  section: { gap: 14 },
  sectionTitle: { color: colors.text, fontSize: 18, fontWeight: '800' },
  chipRow: { gap: 12, paddingRight: 20 },
  countryCard: { width: 148, gap: 6, borderRadius: 22, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.card, padding: 16 },
  countryFlag: { fontSize: 24 },
  countryName: { color: colors.text, fontWeight: '800' },
  countryMeta: { color: colors.muted, fontSize: 12, lineHeight: 18 },
  categoryGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  categoryCard: { width: '48%', gap: 6, borderRadius: 22, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.card, padding: 16 },
  categoryIcon: { fontSize: 22 },
  categoryName: { color: colors.text, fontWeight: '800' },
  categoryMeta: { color: colors.muted, fontSize: 12 },
  cardRow: { gap: 14, paddingRight: 20 },
  cardWrap: { width: 300 },
});
