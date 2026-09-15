import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import { UserAvatar } from '@/components/UserAvatar';

type LiveRoom = {
  id: string;
  title: string;
  host: string;
  category: string;
  viewers: number;
};

export function LiveCard({ room }: { room: LiveRoom }) {
  return (
    <Link href={`/live/${room.id}`} asChild>
      <View style={styles.card}>
        <View style={styles.row}>
          <UserAvatar name={room.host} />
          <View style={styles.meta}>
            <Text style={styles.title}>{room.title}</Text>
            <Text style={styles.subtitle}>{room.host}</Text>
          </View>
          <Text style={styles.badge}>{room.category}</Text>
        </View>
        <Text style={styles.footer}>{room.viewers.toLocaleString()} viewers watching now</Text>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: 14,
    borderRadius: 20,
    backgroundColor: colors.card,
    padding: 18,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  meta: {
    flex: 1,
    gap: 4,
  },
  title: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '700',
  },
  subtitle: {
    color: colors.muted,
  },
  badge: {
    color: colors.accent,
    fontWeight: '700',
  },
  footer: {
    color: colors.muted,
  },
});
