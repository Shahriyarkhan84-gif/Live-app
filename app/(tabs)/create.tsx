import { useState } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { GoLiveButton } from '@/components/GoLiveButton';
import { Header } from '@/components/Header';
import { InfoListCard } from '@/components/InfoListCard';
import { colors } from '@/constants/colors';
import { useLiveRoom } from '@/hooks/useLiveRoom';

const setupFlow = [
  { title: 'Create live room', detail: 'Backend creates the room and returns streaming session data.', meta: 'backend' },
  { title: 'Provision stream', detail: 'Streaming infrastructure prepares RTMP/WHIP ingestion.', meta: 'streaming' },
  { title: 'Broadcast start', detail: 'Host begins sending video while followers receive live alerts.', meta: 'realtime' },
  { title: 'Authoritative records', detail: 'Backend and PostgreSQL remain the source of truth for status and earnings.', meta: 'data' },
];

export default function CreateScreen() {
  const { countries, categories } = useLiveRoom();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <>
      <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
        <Header title="Go Live" subtitle="Set up your camera, category, region, and audience before you start an original Auralis broadcast." />

        <View style={styles.previewCard}>
          <Text style={styles.previewEyebrow}>Camera preview</Text>
          <Text style={styles.previewTitle}>Blue stage preview</Text>
          <View style={styles.controlRow}>
            <View style={styles.controlChip}><Text style={styles.controlText}>Switch Camera</Text></View>
            <View style={styles.controlChip}><Text style={styles.controlText}>Microphone</Text></View>
            <View style={styles.controlChip}><Text style={styles.controlText}>Beauty</Text></View>
          </View>
        </View>

        <View style={styles.formCard}>
          <TextInput placeholder="Live title" placeholderTextColor={colors.muted} style={styles.input} />
          <TextInput placeholder={`Category (${categories[0]?.name})`} placeholderTextColor={colors.muted} style={styles.input} />
          <TextInput placeholder={`Country or region (${countries[0]?.name})`} placeholderTextColor={colors.muted} style={styles.input} />
          <Pressable onPress={() => setIsSheetOpen(true)} style={styles.sheetButton}>
            <Text style={styles.sheetButtonText}>Audience settings</Text>
          </Pressable>
          <GoLiveButton>START LIVE</GoLiveButton>
        </View>

        <InfoListCard title="Start live flow" items={setupFlow} />
      </ScrollView>

      <Modal animationType="slide" transparent visible={isSheetOpen} onRequestClose={() => setIsSheetOpen(false)}>
        <Pressable style={styles.overlay} onPress={() => setIsSheetOpen(false)}>
          <View style={styles.sheet}>
            <View style={styles.sheetHandle} />
            <Text style={styles.sheetTitle}>Audience settings</Text>
            <Text style={styles.sheetBody}>Choose public, followers-only, or moderated entry. n8n handles notifications and reports, not video streaming.</Text>
          </View>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { gap: 18, padding: 20, paddingBottom: 120 },
  previewCard: { gap: 12, borderRadius: 28, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.cardAlt, padding: 20 },
  previewEyebrow: { color: colors.accentSoft, fontSize: 12, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 1 },
  previewTitle: { color: colors.text, fontSize: 28, fontWeight: '800' },
  controlRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  controlChip: { borderRadius: 999, backgroundColor: colors.overlay, paddingHorizontal: 12, paddingVertical: 10 },
  controlText: { color: colors.text, fontWeight: '700', fontSize: 12 },
  formCard: { gap: 12, borderRadius: 28, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.card, padding: 20 },
  input: { borderRadius: 18, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.backgroundSoft, color: colors.text, paddingHorizontal: 16, paddingVertical: 15 },
  sheetButton: { alignItems: 'center', borderRadius: 18, borderWidth: 1, borderColor: colors.accent, paddingVertical: 14 },
  sheetButtonText: { color: colors.accentSoft, fontWeight: '800' },
  overlay: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(7, 11, 20, 0.55)' },
  sheet: { borderTopLeftRadius: 28, borderTopRightRadius: 28, backgroundColor: colors.cardAlt, padding: 24, gap: 12 },
  sheetHandle: { alignSelf: 'center', width: 42, height: 5, borderRadius: 999, backgroundColor: colors.border },
  sheetTitle: { color: colors.text, fontSize: 22, fontWeight: '800' },
  sheetBody: { color: colors.muted, lineHeight: 22 },
});
