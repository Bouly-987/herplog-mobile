import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { ArrowLeft, TrendingUp, Utensils, Target } from 'lucide-react-native';
import { colors, spacing, radii } from '../../constants/theme';

const chartData = [
  { label: 'May 01', value: 0.55 },
  { label: 'May 08', value: 0.65 },
  { label: 'May 15', value: 0.72 },
  { label: 'May 22', value: 0.85 },
];

export default function GrowthTrends() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <ArrowLeft size={24} color={colors.textPrimary} />
          </Pressable>
          <Text style={styles.headerTitle}>Growth Trends</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Reptile */}
        <View style={styles.reptileRow}>
          <View style={styles.badgeActive}>
            <Text style={styles.badgeText}>ACTIVE GROWTH</Text>
          </View>
          <Text style={styles.reptileName}>Apex (Ball Python)</Text>
          <Text style={styles.reptileSubtitle}>Health & Metric Trends</Text>
        </View>

        {/* Time Range */}
        <View style={styles.timeRow}>
          <Pressable style={[styles.timeBtn, styles.timeBtnActive]}>
            <Text style={[styles.timeBtnText, styles.timeBtnTextActive]}>1 Month</Text>
          </Pressable>
          <Pressable style={styles.timeBtn}>
            <Text style={styles.timeBtnText}>6 Months</Text>
          </Pressable>
          <Pressable style={styles.timeBtn}>
            <Text style={styles.timeBtnText}>1 Year</Text>
          </Pressable>
        </View>

        {/* Weight Chart */}
        <View style={styles.chartCard}>
          <View style={styles.chartHeader}>
            <Text style={styles.chartTitle}>Weight Progression</Text>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.chartChange}>+12.4%</Text>
              <Text style={styles.chartSubtext}>VS LAST PERIOD</Text>
            </View>
          </View>
          <Text style={styles.chartUnit}>Measured in grams (g)</Text>
          <View style={styles.barChart}>
            {chartData.map((d, i) => (
              <View key={i} style={styles.barCol}>
                <View style={[styles.bar, { height: d.value * 140 }]} />
                <Text style={styles.barLabel}>{d.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Metric Cards */}
        <View style={styles.metricsRow}>
          <View style={[styles.metricCard, styles.metricDark]}>
            <Text style={[styles.metricLabel, { color: colors.mintGreen }]}>CURRENT WEIGHT</Text>
            <Text style={[styles.metricValue, { color: colors.white }]}>1,240 g</Text>
            <Text style={[styles.metricNote, { color: colors.mintGreen }]}>✓ Consistent gains</Text>
          </View>
          <View style={styles.metricCard}>
            <Text style={styles.metricLabel}>LENGTH TREND</Text>
            <Text style={styles.metricValue}>102 cm</Text>
            <View style={styles.metricDots}>
              {[1, 2, 3, 4, 5].map((_, i) => (
                <View key={i} style={[styles.metricDot, i < 4 && { backgroundColor: colors.accentGreen }]} />
              ))}
            </View>
          </View>
        </View>

        {/* Action Cards */}
        <View style={styles.actionsRow}>
          {[
            { icon: TrendingUp, label: 'Growth\nVelocity' },
            { icon: Utensils, label: 'Feeding\nAnalysis' },
            { icon: Target, label: 'Projection' },
          ].map((item, i) => (
            <Pressable key={i} style={styles.actionCard}>
              <item.icon size={24} color={colors.accentGreen} />
              <Text style={styles.actionLabel}>{item.label}</Text>
            </Pressable>
          ))}
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
  reptileRow: { paddingHorizontal: 20, marginBottom: 16 },
  badgeActive: { backgroundColor: colors.lightGreen, paddingHorizontal: 12, paddingVertical: 5, borderRadius: radii.pill, alignSelf: 'flex-start', marginBottom: 8 },
  badgeText: { fontSize: 10, fontWeight: '700', color: colors.primaryGreen, letterSpacing: 1 },
  reptileName: { fontSize: 26, fontWeight: '800', color: colors.textPrimary },
  reptileSubtitle: { fontSize: 14, color: colors.textSecondary, marginTop: 2 },
  timeRow: { flexDirection: 'row', gap: 8, paddingHorizontal: 20, marginBottom: 20 },
  timeBtn: { paddingHorizontal: 20, paddingVertical: 10, borderRadius: radii.pill, backgroundColor: colors.cardBg, borderWidth: 1, borderColor: colors.borderSubtle },
  timeBtnActive: { backgroundColor: colors.primaryGreen, borderColor: colors.primaryGreen },
  timeBtnText: { fontSize: 13, fontWeight: '600', color: colors.textSecondary },
  timeBtnTextActive: { color: colors.white },
  chartCard: { backgroundColor: colors.cardBg, marginHorizontal: 20, borderRadius: radii.lg, padding: 20, borderWidth: 1, borderColor: colors.borderSubtle, marginBottom: 16 },
  chartHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  chartTitle: { fontSize: 16, fontWeight: '700', color: colors.textPrimary },
  chartChange: { fontSize: 16, fontWeight: '700', color: colors.statusHealthy },
  chartSubtext: { fontSize: 9, fontWeight: '700', color: colors.textMuted, letterSpacing: 1, marginTop: 2 },
  chartUnit: { fontSize: 12, color: colors.textMuted, marginTop: 2, marginBottom: 16 },
  barChart: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-end', height: 160, paddingTop: 20 },
  barCol: { alignItems: 'center', gap: 8 },
  bar: { width: 40, backgroundColor: colors.primaryGreen, borderRadius: 6 },
  barLabel: { fontSize: 10, color: colors.textMuted, fontWeight: '600' },
  metricsRow: { flexDirection: 'row', gap: 12, paddingHorizontal: 20, marginBottom: 16 },
  metricCard: { flex: 1, backgroundColor: colors.cardBg, borderRadius: radii.lg, padding: 16, borderWidth: 1, borderColor: colors.borderSubtle },
  metricDark: { backgroundColor: colors.darkGreen, borderColor: colors.darkGreen },
  metricLabel: { fontSize: 9, fontWeight: '700', color: colors.textMuted, letterSpacing: 1 },
  metricValue: { fontSize: 28, fontWeight: '800', color: colors.textPrimary, marginTop: 4 },
  metricNote: { fontSize: 12, fontWeight: '600', marginTop: 6 },
  metricDots: { flexDirection: 'row', gap: 4, marginTop: 8 },
  metricDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: colors.borderSubtle },
  actionsRow: { flexDirection: 'row', gap: 12, paddingHorizontal: 20 },
  actionCard: { flex: 1, backgroundColor: colors.cardBg, borderRadius: radii.lg, padding: 16, alignItems: 'center', gap: 8, borderWidth: 1, borderColor: colors.borderSubtle },
  actionLabel: { fontSize: 12, fontWeight: '600', color: colors.textSecondary, textAlign: 'center' },
});
