import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { ArrowLeft, Share2, FileDown, Droplets, Thermometer, Heart } from 'lucide-react-native';
import { colors, spacing, radii } from '../../constants/theme';

export default function HealthReport() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <ArrowLeft size={24} color={colors.textPrimary} />
          </Pressable>
          <Text style={styles.headerTitle}>Health Report</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Reptile Info */}
        <View style={styles.reptileInfo}>
          <View style={styles.reptileAvatar}>
            <Text style={styles.reptileEmoji}>🐍</Text>
          </View>
          <Text style={styles.reptileName}>Zephyr</Text>
          <Text style={styles.reptileSpecies}>Emerald Tree Boa</Text>
          <View style={styles.activeBadge}>
            <View style={styles.activeDot} />
            <Text style={styles.activeText}>Active Clinical Report</Text>
          </View>
        </View>

        {/* Bento Grid */}
        <View style={styles.bentoGrid}>
          <View style={styles.bentoRow}>
            <View style={[styles.bentoCard, styles.bentoLarge]}>
              <Text style={styles.bentoLabel}>WEIGHT TREND</Text>
              <View style={styles.weightRow}>
                <Text style={styles.bentoValueLg}>1,240g</Text>
                <Text style={styles.weightChange}>+12g</Text>
              </View>
              <View style={styles.sparkline}>
                {[4, 6, 5, 7, 6, 8, 7, 9, 8].map((h, i) => (
                  <View key={i} style={[styles.sparkBar, { height: h * 3, backgroundColor: i === 8 ? colors.primaryGreen : colors.mintGreen }]} />
                ))}
              </View>
            </View>
            <View style={[styles.bentoCard, styles.bentoSmall]}>
              <Text style={styles.bentoLabel}>FEEDING CONSISTENCY</Text>
              <Text style={styles.bentoValueLg}>94%</Text>
              <View style={styles.progressRing}>
                <View style={styles.progressFill} />
              </View>
            </View>
          </View>
          <View style={styles.bentoRow}>
            <View style={[styles.bentoCard, styles.bentoSmall]}>
              <Text style={styles.bentoLabel}>LAST SHED QUALITY</Text>
              <Text style={styles.bentoValue}>Full & Intact</Text>
              <View style={[styles.qualityBadge, { backgroundColor: colors.lightGreen }]}>
                <Text style={[styles.qualityText, { color: colors.primaryGreen }]}>Excellent</Text>
              </View>
            </View>
            <View style={[styles.bentoCard, styles.bentoLarge]}>
              <Text style={styles.bentoLabel}>ENVIRONMENT</Text>
              <View style={styles.envRow}>
                <Droplets size={16} color={colors.primaryGreen} />
                <Text style={styles.envLabel}>Humidity</Text>
                <View style={styles.envBar}><View style={[styles.envBarFill, { width: '78%' }]} /></View>
                <Text style={styles.envValue}>78%</Text>
              </View>
              <View style={styles.envRow}>
                <Thermometer size={16} color={colors.coral} />
                <Text style={styles.envLabel}>Temp</Text>
                <View style={{ flex: 1 }} />
                <Text style={styles.envValue}>31°C</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Veterinary Notes */}
        <Text style={styles.sectionTitle}>Veterinary Notes</Text>
        <View style={styles.vetCard}>
          <View style={styles.vetEntry}>
            <View style={[styles.vetDot, { backgroundColor: colors.statusHealthy }]} />
            <View style={{ flex: 1 }}>
              <Text style={styles.vetTitle}>Respiratory check — clear</Text>
              <Text style={styles.vetMeta}>Dr. Martinez · Oct 15, 2024</Text>
            </View>
          </View>
          <View style={styles.vetDivider} />
          <View style={styles.vetEntry}>
            <View style={[styles.vetDot, { backgroundColor: colors.statusDanger }]} />
            <View style={{ flex: 1 }}>
              <Text style={styles.vetTitle}>Slight scale discoloration noted</Text>
              <Text style={styles.vetMeta}>Dr. Martinez · Sep 28, 2024</Text>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionRow}>
          <Pressable style={styles.shareBtn}>
            <Share2 size={18} color={colors.white} />
            <Text style={styles.shareBtnText}>Share Report</Text>
          </Pressable>
          <Pressable style={styles.exportBtn}>
            <FileDown size={18} color={colors.textPrimary} />
            <Text style={styles.exportBtnText}>Export PDF</Text>
          </Pressable>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.pageBg },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 16 },
  headerTitle: { fontSize: 16, fontWeight: '600', color: colors.textPrimary },
  reptileInfo: { alignItems: 'center', paddingBottom: 24 },
  reptileAvatar: { width: 64, height: 64, borderRadius: 32, backgroundColor: colors.lightGreen, justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  reptileEmoji: { fontSize: 28 },
  reptileName: { fontSize: 24, fontWeight: '800', color: colors.textPrimary },
  reptileSpecies: { fontSize: 14, color: colors.textSecondary, marginTop: 2 },
  activeBadge: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 8, backgroundColor: colors.lightGreen, paddingHorizontal: 12, paddingVertical: 6, borderRadius: radii.pill },
  activeDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: colors.statusHealthy },
  activeText: { fontSize: 12, fontWeight: '600', color: colors.primaryGreen },
  bentoGrid: { paddingHorizontal: 20, gap: 12, marginBottom: 28 },
  bentoRow: { flexDirection: 'row', gap: 12 },
  bentoCard: { backgroundColor: colors.cardBg, borderRadius: radii.lg, padding: 16, borderWidth: 1, borderColor: colors.borderSubtle },
  bentoLarge: { flex: 3 },
  bentoSmall: { flex: 2 },
  bentoLabel: { fontSize: 9, fontWeight: '700', color: colors.textMuted, letterSpacing: 1, marginBottom: 6 },
  bentoValue: { fontSize: 16, fontWeight: '700', color: colors.textPrimary },
  bentoValueLg: { fontSize: 28, fontWeight: '800', color: colors.textPrimary },
  weightRow: { flexDirection: 'row', alignItems: 'baseline', gap: 8 },
  weightChange: { fontSize: 13, fontWeight: '600', color: colors.statusHealthy },
  sparkline: { flexDirection: 'row', gap: 3, alignItems: 'flex-end', marginTop: 12 },
  sparkBar: { width: 8, borderRadius: 4 },
  progressRing: { width: 50, height: 50, borderRadius: 25, borderWidth: 5, borderColor: colors.borderSubtle, marginTop: 8 },
  progressFill: { position: 'absolute', width: 50, height: 50, borderRadius: 25, borderWidth: 5, borderColor: colors.accentGreen, borderTopColor: 'transparent' },
  qualityBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: radii.sm, marginTop: 8, alignSelf: 'flex-start' },
  qualityText: { fontSize: 12, fontWeight: '600' },
  envRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 8 },
  envLabel: { fontSize: 13, color: colors.textSecondary, width: 60 },
  envBar: { flex: 1, height: 6, backgroundColor: colors.borderSubtle, borderRadius: 3 },
  envBarFill: { height: 6, backgroundColor: colors.accentGreen, borderRadius: 3 },
  envValue: { fontSize: 13, fontWeight: '600', color: colors.textPrimary, width: 36, textAlign: 'right' },
  sectionTitle: { fontSize: 20, fontWeight: '700', color: colors.textPrimary, paddingHorizontal: 20, marginBottom: 12 },
  vetCard: { backgroundColor: colors.cardBg, marginHorizontal: 20, borderRadius: radii.lg, padding: 16, borderWidth: 1, borderColor: colors.borderSubtle, marginBottom: 24 },
  vetEntry: { flexDirection: 'row', alignItems: 'flex-start', gap: 12, paddingVertical: 4 },
  vetDot: { width: 10, height: 10, borderRadius: 5, marginTop: 4 },
  vetTitle: { fontSize: 14, fontWeight: '600', color: colors.textPrimary },
  vetMeta: { fontSize: 12, color: colors.textMuted, marginTop: 2 },
  vetDivider: { height: 1, backgroundColor: colors.borderSubtle, marginVertical: 12 },
  actionRow: { flexDirection: 'row', gap: 12, paddingHorizontal: 20 },
  shareBtn: { flex: 1, flexDirection: 'row', gap: 8, backgroundColor: colors.primaryGreen, paddingVertical: 14, borderRadius: radii.pill, justifyContent: 'center', alignItems: 'center' },
  shareBtnText: { color: colors.white, fontSize: 14, fontWeight: '700' },
  exportBtn: { flex: 1, flexDirection: 'row', gap: 8, backgroundColor: colors.cardBg, paddingVertical: 14, borderRadius: radii.pill, justifyContent: 'center', alignItems: 'center', borderWidth: 1.5, borderColor: colors.textPrimary },
  exportBtnText: { color: colors.textPrimary, fontSize: 14, fontWeight: '700' },
});
