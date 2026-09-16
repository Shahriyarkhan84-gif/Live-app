import { Link, router } from 'expo-router';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { colors } from '@/constants/colors';
import { useAuth } from '@/hooks/useAuth';

export default function LoginScreen() {
  const { signIn } = useAuth();

  const handleLogin = () => {
    signIn();
    router.replace('/home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <View style={styles.glowPrimary} />
        <View style={styles.glowAccent} />
        <Text style={styles.eyebrow}>LIVE • CHAT • GIFTS</Text>
        <Text style={styles.title}>A modern streaming UI for creators and viewers.</Text>
        <Text style={styles.subtitle}>Sign in to explore discovery feeds, live rooms, gifting flows, and creator operations.</Text>
        <View style={styles.statRow}>
          <View style={styles.statPill}>
            <Text style={styles.statValue}>20</Text>
            <Text style={styles.statLabel}>Lessons</Text>
          </View>
          <View style={styles.statPill}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Services</Text>
          </View>
          <View style={styles.statPill}>
            <Text style={styles.statValue}>24/7</Text>
            <Text style={styles.statLabel}>Live Ops</Text>
          </View>
        </View>
      </View>
      <View style={styles.formCard}>
        <TextInput placeholder="Email" placeholderTextColor={colors.muted} style={styles.input} />
        <TextInput placeholder="Password" placeholderTextColor={colors.muted} secureTextEntry style={styles.input} />
        <Pressable onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Log in</Text>
        </Pressable>
        <Link href="/register" style={styles.link}>
          Create an account
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: colors.background,
    gap: 18,
  },
  hero: {
    gap: 14,
    overflow: 'hidden',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    padding: 24,
  },
  glowPrimary: {
    position: 'absolute',
    top: -60,
    right: -40,
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: colors.primary,
    opacity: 0.16,
  },
  glowAccent: {
    position: 'absolute',
    bottom: -60,
    left: -30,
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: colors.accent,
    opacity: 0.14,
  },
  eyebrow: {
    color: colors.accentSoft,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.1,
  },
  title: {
    color: colors.text,
    fontSize: 34,
    fontWeight: '800',
    lineHeight: 40,
    letterSpacing: -0.8,
  },
  subtitle: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 23,
  },
  statRow: {
    flexDirection: 'row',
    gap: 10,
  },
  statPill: {
    flex: 1,
    borderRadius: 18,
    backgroundColor: colors.overlay,
    padding: 12,
  },
  statValue: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '800',
  },
  statLabel: {
    color: colors.muted,
    marginTop: 2,
    fontSize: 12,
    fontWeight: '700',
  },
  formCard: {
    gap: 14,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.cardAlt,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    backgroundColor: colors.backgroundSoft,
    color: colors.text,
    paddingHorizontal: 16,
    paddingVertical: 15,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    alignItems: 'center',
    paddingVertical: 16,
  },
  buttonText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '800',
  },
  link: {
    color: colors.primarySoft,
    textAlign: 'center',
    fontWeight: '700',
  },
});
