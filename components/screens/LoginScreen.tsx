import { Link, router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { brand } from '@/constants/architecture';
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
      <View style={styles.heroCard}>
        <View style={styles.logoWrap}>
          <View style={styles.logoInner} />
        </View>
        <Text style={styles.appName}>{brand.name}</Text>
        <Text style={styles.tagline}>{brand.tagline}</Text>
        <Text style={styles.copy}>An original premium blue social broadcasting app for watching, connecting, and going live worldwide.</Text>
      </View>

      <View style={styles.actionCard}>
        <Pressable onPress={handleLogin} style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Continue with Apple</Text>
        </Pressable>
        <Pressable onPress={handleLogin} style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Continue with Google</Text>
        </Pressable>
        <Pressable onPress={handleLogin} style={styles.primaryGhostButton}>
          <Text style={styles.primaryGhostText}>Continue with Phone/Email</Text>
        </Pressable>
        <View style={styles.row}>
          <Pressable onPress={handleLogin} style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Login</Text>
          </Pressable>
          <Link href="/register" asChild>
            <Pressable style={styles.outlineButton}>
              <Text style={styles.outlineButtonText}>Create Account</Text>
            </Pressable>
          </Link>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Terms</Text>
        <Text style={styles.footerDot}>•</Text>
        <Text style={styles.footerText}>Privacy</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.background,
    paddingHorizontal: 24,
    paddingTop: 72,
    paddingBottom: 40,
  },
  heroCard: {
    gap: 12,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    padding: 24,
  },
  logoWrap: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(59, 130, 246, 0.18)',
  },
  logoInner: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.accent,
  },
  appName: {
    color: colors.text,
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: -0.8,
  },
  tagline: {
    color: colors.accentSoft,
    fontSize: 18,
    fontWeight: '700',
  },
  copy: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 24,
  },
  actionCard: {
    gap: 12,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.cardAlt,
    padding: 20,
  },
  secondaryButton: {
    alignItems: 'center',
    borderRadius: 18,
    backgroundColor: colors.overlay,
    paddingVertical: 15,
  },
  secondaryButtonText: {
    color: colors.text,
    fontWeight: '700',
  },
  primaryGhostButton: {
    alignItems: 'center',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.accent,
    paddingVertical: 15,
  },
  primaryGhostText: {
    color: colors.accentSoft,
    fontWeight: '800',
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },
  primaryButton: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 18,
    backgroundColor: colors.primary,
    paddingVertical: 15,
  },
  primaryButtonText: {
    color: colors.text,
    fontWeight: '800',
  },
  outlineButton: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: 15,
  },
  outlineButtonText: {
    color: colors.text,
    fontWeight: '700',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  footerText: {
    color: colors.muted,
    fontSize: 13,
  },
  footerDot: {
    color: colors.muted,
  },
});
