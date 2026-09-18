import { Stack } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Header } from '@/components/Header';
import { colors } from '@/constants/colors';
import { useLiveRoom } from '@/hooks/useLiveRoom';

export default function CategoriesScreen() {
  const { categories } = useLiveRoom();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Stack.Screen options={{ headerShown: true, title: 'Categories' }} />
      <Header title="Categories" subtitle="Music, gaming, chat, entertainment, sports, travel, cooking, comedy, education, and lifestyle." />
      <View style={styles.grid}>
        {categories.map((category) => (
          <View key={category.slug} style={styles.card}>
            <Text style={styles.icon}>{category.icon}</Text>
            <Text style={styles.name}>{category.name}</Text>
            <Text style={styles.meta}>{category.description}</Text>
            <Text style={styles.meta}>{category.liveCount} live now</Text>
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
  icon: { fontSize: 24 },
  name: { color: colors.text, fontWeight: '800' },
  meta: { color: colors.muted, fontSize: 12, lineHeight: 18 },
});
