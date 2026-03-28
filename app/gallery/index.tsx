import { View, Text, ScrollView, StyleSheet, Pressable, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { ArrowLeft, Plus, Camera } from 'lucide-react-native';
import { colors, radii } from '../../constants/theme';

const { width } = Dimensions.get('window');
const imageSize = (width - 52) / 2;

const shedEntries = [
  { id: '1', date: 'March 10, 2026', status: 'COMPLETE', statusColor: colors.statusHealthy, note: 'Full shed completed in 4 days. Clean single piece, no retained shed observed.', image: 'https://images.unsplash.com/photo-1585095595205-e68428a9e205?w=400' },
  { id: '2', date: 'February 3, 2026', status: 'COMPLETE', statusColor: colors.statusHealthy, note: 'Excellent shed. Soaked for 20 minutes.', image: 'https://images.unsplash.com/photo-1531386151447-fd76ad50012f?w=400' },
  { id: '3', date: 'January 2, 2026', status: 'COMPLETE', statusColor: colors.statusHealthy, note: 'Minor retained skin on tail tip. Assisted removal.', image: 'https://images.unsplash.com/photo-1504450874802-0ba2bcd659e3?w=400' },
  { id: '4', date: 'February 24, 2026', status: 'INCOMPLETE', statusColor: colors.statusWarning, note: 'Retained shed on belly. Humidity increased to 85%.', image: 'https://images.unsplash.com/photo-1615751072497-5f5169febe17?w=400' },
  { id: '5', date: 'January 16, 2026', status: 'INCOMPLETE', statusColor: colors.statusWarning, note: 'Partial shed.', image: 'https://images.unsplash.com/photo-1585095595205-e68428a9e205?w=400' },
  { id: '6', date: 'December 10, 2025', status: 'COMPLETE', statusColor: colors.statusHealthy, note: 'Clean shed.', image: 'https://images.unsplash.com/photo-1531386151447-fd76ad50012f?w=400' },
];

export default function SheddingGallery() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <ArrowLeft size={24} color={colors.textPrimary} />
          </Pressable>
          <Text style={styles.headerTitle}>Gallery · Artemis</Text>
          <View style={{ width: 24 }} />
        </View>

        <View style={styles.titleRow}>
          <View>
            <Text style={styles.title}>Shedding Gallery</Text>
            <Text style={styles.subtitle}>6 records · 5 complete · Track progress</Text>
          </View>
          <Pressable style={styles.addBtn}>
            <Plus size={18} color={colors.white} />
            <Text style={styles.addBtnText}>Add Photo</Text>
          </Pressable>
        </View>

        <View style={styles.grid}>
          {shedEntries.map((entry) => (
            <View key={entry.id} style={styles.gridItem}>
              <Image source={{ uri: entry.image }} style={styles.gridImage} />
              <View style={[styles.statusBadge, { backgroundColor: entry.statusColor + '20' }]}>
                <Text style={[styles.statusText, { color: entry.statusColor }]}>{entry.status}</Text>
              </View>
              <View style={styles.gridInfo}>
                <Text style={styles.gridDate}>{entry.date}</Text>
                <Text style={styles.gridNote} numberOfLines={2}>{entry.note}</Text>
              </View>
            </View>
          ))}
        </View>

        <Pressable style={styles.archiveLink}>
          <Text style={styles.archiveLinkText}>Archive Older Records →</Text>
        </Pressable>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.pageBg },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 16 },
  headerTitle: { fontSize: 16, fontWeight: '600', color: colors.textPrimary },
  titleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', paddingHorizontal: 20, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: '800', color: colors.textPrimary },
  subtitle: { fontSize: 13, color: colors.textSecondary, marginTop: 4 },
  addBtn: { flexDirection: 'row', gap: 6, backgroundColor: colors.primaryGreen, paddingHorizontal: 16, paddingVertical: 10, borderRadius: radii.pill, alignItems: 'center' },
  addBtnText: { color: colors.white, fontSize: 13, fontWeight: '700' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, paddingHorizontal: 20 },
  gridItem: { width: imageSize, backgroundColor: colors.cardBg, borderRadius: radii.lg, overflow: 'hidden', borderWidth: 1, borderColor: colors.borderSubtle },
  gridImage: { width: '100%', height: imageSize * 0.75 },
  statusBadge: { position: 'absolute', top: 8, left: 8, paddingHorizontal: 8, paddingVertical: 3, borderRadius: radii.sm },
  statusText: { fontSize: 9, fontWeight: '700', letterSpacing: 0.5 },
  gridInfo: { padding: 10 },
  gridDate: { fontSize: 12, fontWeight: '700', color: colors.textPrimary },
  gridNote: { fontSize: 11, color: colors.textSecondary, marginTop: 4, lineHeight: 16 },
  archiveLink: { alignItems: 'center', paddingVertical: 20 },
  archiveLinkText: { fontSize: 14, fontWeight: '600', color: colors.primaryGreen },
});
