import { Link, router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { brand, countries } from '@/constants/architecture';
import { colors } from '@/constants/colors';
import { useAuth } from '@/hooks/useAuth';

export default function RegisterScreen() {
  const { signIn } = useAuth();

  const handleRegister = () => {
    signIn();
    router.replace('/home');
  };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>{brand.name}</Text>
        <Text style={styles.title}>Create your global broadcasting account.</Text>
        <Text style={styles.subtitle}>Add your identity, country, and profile basics before you start watching or hosting live rooms.</Text>
      </View>

      <View style={styles.formCard}>
        <TextInput placeholder="Username" placeholderTextColor={colors.muted} style={styles.input} />
        <TextInput placeholder="Display name" placeholderTextColor={colors.muted} style={styles.input} />
        <TextInput placeholder="Email or phone" placeholderTextColor={colors.muted} style={styles.input} />
        <TextInput placeholder="Password" placeholderTextColor={colors.muted} secureTextEntry style={styles.input} />
        <TextInput placeholder={`Country (${countries[0]?.name})`} placeholderTextColor={colors.muted} style={styles.input} />
        <TextInput placeholder="Date of birth" placeholderTextColor={colors.muted} style={styles.input} />
        <TextInput placeholder="Profile picture URL (optional)" placeholderTextColor={colors.muted} style={styles.input} />
        <TextInput placeholder="Bio (optional)" placeholderTextColor={colors.muted} style={[styles.input, styles.bioInput]} multiline />
        <Pressable onPress={handleRegister} style={styles.button}>
          <Text style={styles.buttonText}>Create Account</Text>
        </Pressable>
        <Link href="/login" style={styles.link}>
          Already have an account?
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    gap: 18,
    padding: 24,
    paddingTop: 72,
    paddingBottom: 40,
  },
  hero: {
    gap: 10,
  },
  eyebrow: {
    color: colors.accentSoft,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  title: {
    color: colors.text,
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: -0.8,
  },
  subtitle: {
    color: colors.muted,
    lineHeight: 22,
  },
  formCard: {
    gap: 12,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.cardAlt,
    padding: 20,
  },
  input: {
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    color: colors.text,
    paddingHorizontal: 16,
    paddingVertical: 15,
  },
  bioInput: {
    minHeight: 92,
    textAlignVertical: 'top',
  },
  button: {
    alignItems: 'center',
    borderRadius: 18,
    backgroundColor: colors.primary,
    paddingVertical: 16,
  },
  buttonText: {
    color: colors.text,
    fontWeight: '800',
  },
  link: {
    color: colors.primarySoft,
    textAlign: 'center',
    fontWeight: '700',
  },
});
