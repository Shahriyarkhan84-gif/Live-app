import { ReactNode, useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';

import { ActionCard } from '@/components/ActionCard';
import { Header } from '@/components/Header';
import { LiveCard } from '@/components/LiveCard';
import { SkeletonBlock } from '@/components/SkeletonBlock';
import { StatCard } from '@/components/StatCard';
import { brand } from '@/constants/architecture';
import { colors } from '@/constants/colors';
import { useLiveRoom } from '@/hooks/useLiveRoom';
import { usePlatformData } from '@/hooks/usePlatformData';

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

export default function HomeScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const { countries, countryLive, followingLive, popularLive, recommended, selectedCountryCode, setSelectedCountryCode, isLoading, refetch } = useLiveRoom();
  const { homeMetrics = [], quickActions = [] } = usePlatformData();
  const selectedCountry = countries.find((country) => country.code === selectedCountryCode);

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
      <View style={styles.topBar}>
        <View>
          <Text style={styles.brand}>{brand.name}</Text>
          <Text style={styles.topBarSubtitle}>Original global blue live broadcasting</Text>
        </View>
        <View style={styles.topBarActions}>
          <View style={styles.topPill}>
            <Text style={styles.topPillText}>Search</Text>
          </View>
          <View style={styles.topPill}>
            <Text style={styles.topPillText}>Alerts</Text>
          </View>
        </View>
      </View>

      <Header title="Home" subtitle={`Live in ${selectedCountry?.name ?? 'your region'}, following activity, popular rooms, and recommended hosts.`} />

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.countryRow}>
        {countries.map((country) => (
          <Text key={country.code} onPress={() => setSelectedCountryCode(country.code)} style={[styles.countryChip, selectedCountryCode === country.code && styles.countryChipActive]}>
            {country.flag} {country.code}
          </Text>
        ))}
      </ScrollView>

      <View style={styles.metricsRow}>
        {homeMetrics.map((metric) => (
          <StatCard key={metric.label} label={metric.label} value={metric.value} tone={metric.tone} />
        ))}
      </View>

      {isLoading ? (
        <View style={styles.loadingStack}>
          <SkeletonBlock height={180} />
          <SkeletonBlock height={180} />
        </View>
      ) : (
        <>
          <Section title="LIVE IN YOUR COUNTRY">
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalList}>
              {countryLive.map((room) => (
                <View key={room.id} style={styles.cardWrap}>
                  <LiveCard room={room} />
                </View>
              ))}
            </ScrollView>
          </Section>

          <Section title="FOLLOWING LIVE">
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalList}>
              {followingLive.map((room) => (
                <View key={room.id} style={styles.cardWrap}>
                  <LiveCard room={room} />
                </View>
              ))}
            </ScrollView>
          </Section>

          <Section title="POPULAR LIVE">
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalList}>
              {popularLive.map((room) => (
                <View key={room.id} style={styles.cardWrap}>
                  <LiveCard room={room} />
                </View>
              ))}
            </ScrollView>
          </Section>

          <Section title="RECOMMENDED">
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalList}>
              {recommended.map((room) => (
                <View key={room.id} style={styles.cardWrap}>
                  <LiveCard room={room} />
                </View>
              ))}
            </ScrollView>
          </Section>
        </>
      )}

      <Section title="PRODUCT SURFACES">
        {quickActions.map((action) => (
          <ActionCard key={action.title} title={action.title} description={action.description} href={action.href} />
        ))}
      </Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { gap: 20, padding: 20, paddingBottom: 120 },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  brand: { color: colors.text, fontSize: 24, fontWeight: '800' },
  topBarSubtitle: { color: colors.muted, fontSize: 13 },
  topBarActions: { flexDirection: 'row', gap: 8 },
  topPill: { borderRadius: 999, backgroundColor: colors.cardAlt, paddingHorizontal: 12, paddingVertical: 10 },
  topPillText: { color: colors.text, fontSize: 12, fontWeight: '700' },
  countryRow: { gap: 10 },
  countryChip: { overflow: 'hidden', borderRadius: 999, backgroundColor: colors.card, color: colors.muted, paddingHorizontal: 14, paddingVertical: 10, fontWeight: '700' },
  countryChipActive: { backgroundColor: colors.primary, color: colors.text },
  metricsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  loadingStack: { gap: 14 },
  section: { gap: 14 },
  sectionTitle: { color: colors.text, fontSize: 18, fontWeight: '800', letterSpacing: 0.8 },
  horizontalList: { gap: 14, paddingRight: 20 },
  cardWrap: { width: 300 },
});
