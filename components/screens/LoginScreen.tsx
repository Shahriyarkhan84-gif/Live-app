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
      <Text style={styles.eyebrow}>Welcome back</Text>
      <Text style={styles.title}>Start watching and hosting live streams.</Text>
      <TextInput placeholder="Email" placeholderTextColor={colors.muted} style={styles.input} />
      <TextInput placeholder="Password" placeholderTextColor={colors.muted} secureTextEntry style={styles.input} />
      <Pressable onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Log in</Text>
      </Pressable>
      <Link href="/auth/register" style={styles.link}>
        Create an account
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
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 38,
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
