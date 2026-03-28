import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import {
  ArrowLeft,
  Utensils,
  Repeat2,
  Sparkles,
  Scale,
  Ruler,
  Clock,
  Calendar,
} from 'lucide-react-native';
import { colors, spacing, radii } from '../../constants/theme';

const activityHistory = [
  {
    id: '1',
    type: 'Feeding',
    description: 'Fed 1 medium rat',
    date: 'Mar 24, 2026',
    icon: Utensils,
    color: colors.primaryGreen,
  },
  {
    id: '2',
    type: 'Shedding',
    description: 'Full shed, clean in one piece',
    date: 'Mar 18, 2026',
    icon: Repeat2,
    color: colors.coral,
  },
  {
    id: '3',
    type: 'Deep Clean',
    description: 'Full enclosure deep clean & substrate change',
    date: 'Mar 12, 2026',
    icon: Sparkles,
    color: colors.accentGreen,
  },
];

function MetricCard({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: React.ElementType;
}) {
  return (
    <View style={styles.metricCard}>
      <View style={styles.metricIconWrap}>
        <Icon size={16} color={colors.accentGreen} strokeWidth={1.8} />
      </View>
      <Text style={styles.metricValue}>{value}</Text>
      <Text style={styles.metricLabel}>{label}</Text>
    </View>
  );
}

export default function ReptileProfileScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      {/* Hero Image Area */}
      <View style={styles.hero}>
        <View style={styles.heroPlaceholder}>
          <Text style={styles.heroEmoji}>🐍</Text>
        </View>
        <SafeAreaView style={styles.heroOverlay}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
            activeOpacity={0.7}
          >
            <ArrowLeft size={22} color={colors.white} strokeWidth={2} />
          </TouchableOpacity>
        </SafeAreaView>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Name & Species */}
        <View style={styles.nameSection}>
          <Text style={styles.reptileName}>Artemis</Text>
          <Text style={styles.species}>Emerald Tree Boa</Text>
        </View>

        {/* Stats Row */}
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>AGE</Text>
            <Text style={styles.statValue}>3 Years</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>HATCH</Text>
            <Text style={styles.statValue}>May 2021</Text>
          </View>
        </View>

        {/* Log Activity Button */}
        <TouchableOpacity style={styles.logButton} activeOpacity={0.8}>
          <Text style={styles.logButtonText}>Log Activity</Text>
        </TouchableOpacity>

        {/* Metric Cards */}
        <View style={styles.metricsRow}>
          <MetricCard label="WEIGHT" value="1,240g" icon={Scale} />
          <MetricCard label="LENGTH" value="4.2ft" icon={Ruler} />
          <MetricCard label="LAST FED" value="3 Days" icon={Clock} />
        </View>

        {/* Activity History */}
        <View style={styles.historySection}>
          <Text style={styles.sectionTitle}>Activity History</Text>
          {activityHistory.map((entry) => {
            const Icon = entry.icon;
            return (
              <View key={entry.id} style={styles.historyCard}>
                <View style={[styles.historyIcon, { backgroundColor: entry.color + '18' }]}>
                  <Icon size={18} color={entry.color} strokeWidth={1.8} />
                </View>
                <View style={styles.historyContent}>
                  <Text style={styles.historyType}>{entry.type}</Text>
                  <Text style={styles.historyDesc}>{entry.description}</Text>
                </View>
                <Text style={styles.historyDate}>{entry.date}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBg,
  },
  hero: {
    height: 260,
    backgroundColor: colors.darkGreen,
    position: 'relative',
  },
  heroPlaceholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primaryGreen,
  },
  heroEmoji: {
    fontSize: 64,
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: spacing.md,
    marginTop: spacing.sm,
  },
  scroll: {
    flex: 1,
    marginTop: -24,
    borderTopLeftRadius: radii.xl,
    borderTopRightRadius: radii.xl,
    backgroundColor: colors.pageBg,
  },
  scrollContent: {
    padding: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  nameSection: {
    marginBottom: spacing.md,
  },
  reptileName: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  species: {
    fontSize: 16,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.cardBg,
    borderRadius: radii.lg,
    paddingVertical: 14,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.md,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.textMuted,
    letterSpacing: 0.6,
    marginBottom: spacing.xs,
  },
  statValue: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  statDivider: {
    width: 1,
    height: 32,
    backgroundColor: colors.borderSubtle,
  },
  logButton: {
    backgroundColor: colors.darkGreen,
    borderRadius: radii.pill,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
  logButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  metricsRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  metricCard: {
    flex: 1,
    backgroundColor: colors.cardBg,
    borderRadius: radii.lg,
    padding: spacing.md,
    alignItems: 'center',
  },
  metricIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.lightGreen,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },
  metricValue: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 2,
  },
  metricLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  historySection: {
    marginTop: spacing.sm,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  historyCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.cardBg,
    borderRadius: radii.lg,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  historyIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  historyContent: {
    flex: 1,
  },
  historyType: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 2,
  },
  historyDesc: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  historyDate: {
    fontSize: 12,
    color: colors.textMuted,
    marginLeft: spacing.sm,
  },
});
