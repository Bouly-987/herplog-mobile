import { View, Text, ScrollView, StyleSheet, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Menu, Droplets, Cpu, ChevronRight } from 'lucide-react-native';
import { colors, spacing, radii } from '../../constants/theme';

const residents = [
  { id: '1', name: 'Monty', species: 'Ball Python', sex: 'Male', status: 'DUE SOON', statusColor: colors.statusWarning, lastFed: 'Oct 24, 2023', nextFeeding: 'In 2 days', image: 'https://images.unsplash.com/photo-1531386151447-fd76ad50012f?w=400' },
  { id: '2', name: 'Artemis', species: 'Emerald Tree Boa', sex: 'Female', status: 'SATISFIED', statusColor: colors.statusHealthy, lastFed: 'Oct 20, 2023', nextFeeding: 'In 5 days', image: 'https://images.unsplash.com/photo-1585095595205-e68428a9e205?w=400' },
  { id: '3', name: 'Zephyr', species: 'Crested Gecko', sex: 'Male', status: 'SATISFIED', statusColor: colors.statusHealthy, lastFed: 'Oct 22, 2023', nextFeeding: 'In 3 days', image: 'https://images.unsplash.com/photo-1615751072497-5f5169febe17?w=400' },
  { id: '4', name: 'Rex', species: 'Blue Tongue Skink', sex: 'Male', status: 'HEALTHY', statusColor: colors.statusHealthy, lastFed: 'Oct 23, 2023', nextFeeding: 'In 4 days', image: 'https://images.unsplash.com/photo-1504450874802-0ba2bcd659e3?w=400' },
];

export default function Dashboard() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Menu size={24} color={colors.textPrimary} />
            <Text style={styles.logo}>HerpLog</Text>
          </View>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JD</Text>
          </View>
        </View>

        {/* Title */}
        <Text style={styles.title}>Your Vivarium</Text>
        <Text style={styles.subtitle}>Tracking 4 healthy residents</Text>

        {/* Stats Row */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Droplets size={20} color={colors.primaryGreen} />
            <Text style={styles.statLabel}>AVG HUMIDITY</Text>
            <Text style={styles.statValue}>64%</Text>
          </View>
          <View style={[styles.statCard, styles.statCardActive]}>
            <Cpu size={20} color={colors.white} />
            <Text style={[styles.statLabel, { color: colors.mintGreen }]}>SYSTEM STATUS</Text>
            <Text style={[styles.statValue, { color: colors.white }]}>Optimal</Text>
          </View>
        </View>

        {/* Active Residents */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Active Residents</Text>
          <Pressable>
            <Text style={styles.viewAll}>View All</Text>
          </Pressable>
        </View>

        {residents.map((reptile) => (
          <Pressable
            key={reptile.id}
            style={styles.reptileCard}
            onPress={() => router.push(`/reptile/${reptile.id}`)}
          >
            <Image source={{ uri: reptile.image }} style={styles.reptileImage} />
            <View style={styles.reptileInfo}>
              <View style={styles.reptileHeader}>
                <View style={[styles.statusBadge, { backgroundColor: reptile.statusColor + '20' }]}>
                  <Text style={[styles.statusText, { color: reptile.statusColor }]}>
                    {reptile.status}
                  </Text>
                </View>
              </View>
              <Text style={styles.reptileName}>{reptile.name}</Text>
              <Text style={styles.reptileSpecies}>{reptile.species} · {reptile.sex}</Text>
              <View style={styles.reptileStats}>
                <View>
                  <Text style={styles.reptileStatLabel}>LAST FED</Text>
                  <Text style={styles.reptileStatValue}>{reptile.lastFed}</Text>
                </View>
                <View>
                  <Text style={styles.reptileStatLabel}>NEXT FEEDING</Text>
                  <Text style={styles.reptileStatValue}>{reptile.nextFeeding}</Text>
                </View>
              </View>
            </View>
            <View style={styles.reptileAction}>
              <ChevronRight size={20} color={colors.textMuted} />
            </View>
          </Pressable>
        ))}

        <View style={{ height: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.pageBg },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 8, paddingBottom: 16 },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  logo: { fontSize: 20, fontWeight: '700', color: colors.textPrimary },
  avatar: { width: 36, height: 36, borderRadius: 18, backgroundColor: colors.accentGreen, justifyContent: 'center', alignItems: 'center' },
  avatarText: { color: colors.white, fontSize: 13, fontWeight: '700' },
  title: { fontSize: 28, fontWeight: '800', color: colors.textPrimary, paddingHorizontal: 20, marginTop: 8 },
  subtitle: { fontSize: 15, color: colors.textSecondary, paddingHorizontal: 20, marginTop: 4, marginBottom: 20 },
  statsRow: { flexDirection: 'row', gap: 12, paddingHorizontal: 20, marginBottom: 28 },
  statCard: { flex: 1, backgroundColor: colors.cardBg, borderRadius: radii.lg, padding: 16, borderWidth: 1, borderColor: colors.borderSubtle },
  statCardActive: { backgroundColor: colors.primaryGreen, borderColor: colors.primaryGreen },
  statLabel: { fontSize: 10, fontWeight: '700', color: colors.textMuted, letterSpacing: 1, marginTop: 8 },
  statValue: { fontSize: 24, fontWeight: '700', color: colors.textPrimary, marginTop: 2 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginBottom: 16 },
  sectionTitle: { fontSize: 20, fontWeight: '700', color: colors.textPrimary },
  viewAll: { fontSize: 14, color: colors.primaryGreen, fontWeight: '600' },
  reptileCard: { flexDirection: 'row', backgroundColor: colors.cardBg, marginHorizontal: 20, marginBottom: 12, borderRadius: radii.lg, overflow: 'hidden', borderWidth: 1, borderColor: colors.borderSubtle },
  reptileImage: { width: 110, height: 140 },
  reptileInfo: { flex: 1, padding: 14, justifyContent: 'center' },
  reptileHeader: { flexDirection: 'row', marginBottom: 6 },
  statusBadge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: radii.sm },
  statusText: { fontSize: 10, fontWeight: '700', letterSpacing: 0.5 },
  reptileName: { fontSize: 18, fontWeight: '700', color: colors.textPrimary },
  reptileSpecies: { fontSize: 13, color: colors.textSecondary, marginTop: 2 },
  reptileStats: { flexDirection: 'row', gap: 20, marginTop: 10 },
  reptileStatLabel: { fontSize: 9, fontWeight: '700', color: colors.textMuted, letterSpacing: 0.5 },
  reptileStatValue: { fontSize: 13, fontWeight: '600', color: colors.textPrimary, marginTop: 2 },
  reptileAction: { justifyContent: 'center', paddingRight: 12 },
});
