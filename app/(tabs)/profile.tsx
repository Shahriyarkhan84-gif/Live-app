import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { ActionCard } from '@/components/ActionCard';
import { Header } from '@/components/Header';
import { UserAvatar } from '@/components/UserAvatar';
import { colors } from '@/constants/colors';
import { useAuth } from '@/hooks/useAuth';
import { usePlatformData } from '@/hooks/usePlatformData';

export default function ProfileScreen() {
  const { currentUser, signOut } = useAuth();
  const { creatorMetrics = [], profileStats = [], settingsLinks = [] } = usePlatformData();

  const handleSignOut = () => {
    signOut();
    router.replace('/login');
  };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Header title="Me" subtitle="Keep your main profile clean while surfacing friends, followers, following, wallet, earnings, and settings." />

      <View style={styles.profileCard}>
        <UserAvatar name={currentUser.displayName} size={74} />
        <Text style={styles.name}>{currentUser.displayName}</Text>
        <Text style={styles.handle}>{currentUser.username}</Text>
        <Text style={styles.country}>{currentUser.countryName}</Text>
        <Text style={styles.bio}>{currentUser.bio}</Text>
        <View style={styles.statTabs}>
          {profileStats.map((stat) => (
            <View key={stat.label} style={styles.statTab}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>
        <Pressable onPress={handleSignOut} style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </Pressable>
      </View>

      <View style={styles.metricRow}>
        {creatorMetrics.map((metric) => (
          <View key={metric.label} style={styles.metricCard}>
            <Text style={styles.metricLabel}>{metric.label}</Text>
            <Text style={styles.metricValue}>{metric.value}</Text>
          </View>
        ))}
      </View>

      {settingsLinks.map((item) => (
        <ActionCard key={item.title} title={item.title} description={item.caption} href={item.href} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { gap: 18, padding: 20, paddingBottom: 120 },
  profileCard: { alignItems: 'center', gap: 10, borderRadius: 28, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.cardAlt, padding: 24 },
  name: { color: colors.text, fontSize: 28, fontWeight: '800' },
  handle: { color: colors.accentSoft, fontWeight: '700' },
  country: { color: colors.text, fontWeight: '700' },
  bio: { color: colors.muted, textAlign: 'center', lineHeight: 22 },
  statTabs: { flexDirection: 'row', width: '100%', gap: 10 },
  statTab: { flex: 1, borderRadius: 20, backgroundColor: colors.overlay, padding: 14, alignItems: 'center' },
  statValue: { color: colors.text, fontSize: 18, fontWeight: '800' },
  statLabel: { color: colors.muted, fontSize: 12, marginTop: 2 },
  logoutButton: { marginTop: 8, borderRadius: 18, backgroundColor: colors.primary, paddingHorizontal: 20, paddingVertical: 13 },
  logoutText: { color: colors.text, fontWeight: '800' },
  metricRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  metricCard: { width: '48%', gap: 8, borderRadius: 22, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.card, padding: 16 },
  metricLabel: { color: colors.muted, fontSize: 12, fontWeight: '700', textTransform: 'uppercase' },
  metricValue: { color: colors.accentSoft, fontSize: 22, fontWeight: '800' },
});
