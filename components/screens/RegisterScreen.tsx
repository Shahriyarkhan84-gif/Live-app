import { Link, router } from 'expo-router';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { colors } from '@/constants/colors';
import { useAuth } from '@/hooks/useAuth';

export default function RegisterScreen() {
  const { signIn } = useAuth();

  const handleRegister = () => {
    signIn();
    router.replace('/home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <View style={styles.glowPrimary} />
        <View style={styles.glowAccent} />
        <Text style={styles.eyebrow}>CREATOR ONBOARDING</Text>
        <Text style={styles.title}>Build your profile and go live with a cleaner experience.</Text>
        <Text style={styles.subtitle}>Create an account to access room setup, moderation tools, wallet flows, and creator analytics.</Text>
      </View>
      <View style={styles.formCard}>
        <TextInput placeholder="Full name" placeholderTextColor={colors.muted} style={styles.input} />
        <TextInput placeholder="Email" placeholderTextColor={colors.muted} style={styles.input} />
        <TextInput placeholder="Password" placeholderTextColor={colors.muted} secureTextEntry style={styles.input} />
        <Pressable onPress={handleRegister} style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </Pressable>
        <Link href="/login" style={styles.link}>
          Already have an account?
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
    left: -30,
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: colors.primary,
    opacity: 0.14,
  },
  glowAccent: {
    position: 'absolute',
    bottom: -60,
    right: -30,
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
    fontSize: 32,
    fontWeight: '800',
    lineHeight: 38,
    letterSpacing: -0.8,
  },
  subtitle: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 23,
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
