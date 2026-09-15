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
      <Text style={styles.eyebrow}>Create your account</Text>
      <Text style={styles.title}>Set up your creator profile and go live faster.</Text>
      <TextInput placeholder="Full name" placeholderTextColor={colors.muted} style={styles.input} />
      <TextInput placeholder="Email" placeholderTextColor={colors.muted} style={styles.input} />
      <TextInput placeholder="Password" placeholderTextColor={colors.muted} secureTextEntry style={styles.input} />
      <Pressable onPress={handleRegister} style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </Pressable>
      <Link href="/auth/login" style={styles.link}>
        Already have an account?
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: colors.background,
    gap: 16,
  },
  eyebrow: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    color: colors.text,
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 36,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    backgroundColor: colors.card,
    color: colors.text,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 14,
    alignItems: 'center',
    paddingVertical: 16,
  },
  buttonText: {
    color: colors.background,
    fontSize: 16,
    fontWeight: '700',
  },
  link: {
    color: colors.text,
    textAlign: 'center',
    fontWeight: '600',
  },
});
