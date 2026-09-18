import { Stack } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Header } from '@/components/Header';
import { colors } from '@/constants/colors';
import { useLiveRoom } from '@/hooks/useLiveRoom';

export default function CountriesScreen() {
  const { countries } = useLiveRoom();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Stack.Screen options={{ headerShown: true, title: 'Countries' }} />
      <Header title="Countries" subtitle="Explore country-based live discovery, popular hosts, new hosts, and regional categories." />
      <View style={styles.grid}>
        {countries.map((country) => (
          <View key={country.code} style={styles.card}>
            <Text style={styles.flag}>{country.flag}</Text>
            <Text style={styles.name}>{country.name}</Text>
            <Text style={styles.meta}>{country.liveCount} live hosts</Text>
            <Text style={styles.meta}>Top category: {country.topCategory}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { gap: 18, padding: 20 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  card: { width: '48%', gap: 6, borderRadius: 22, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.card, padding: 16 },
  flag: { fontSize: 24 },
  name: { color: colors.text, fontWeight: '800' },
  meta: { color: colors.muted, fontSize: 12 },
});
