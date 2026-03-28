import { View, Text, ScrollView, StyleSheet, Pressable, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { ArrowLeft, Clock, Pill, Sparkles, Bell } from 'lucide-react-native';
import { colors, radii } from '../../constants/theme';
import { useState } from 'react';

const feedingReminders = [
  { name: 'Ball Python', species: 'Monty', due: 'Due in 3 days', action: 'Every 10 days', urgent: true },
  { name: 'Leopard Gecko', species: 'Nova', due: 'Due tomorrow', action: 'Every 5 days', urgent: false },
];

const supplements = [
  { name: 'Calcium + D3', schedule: 'Every feeding', due: 'Due in 2 days', enabled: true },
  { name: 'Multivitamin', schedule: 'Bi-weekly', due: 'Due in 9 days', enabled: false },
];

export default function Reminders() {
  const router = useRouter();
  const [subRefresh, setSubRefresh] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <ArrowLeft size={24} color={colors.textPrimary} />
          </Pressable>
          <Text style={styles.headerTitle}>Reminders</Text>
          <Bell size={22} color={colors.textPrimary} />
        </View>

        <View style={styles.titleRow}>
          <Text style={styles.title}>Reminders</Text>
          <Text style={styles.subtitle}>Keep your reptiles on schedule</Text>
        </View>

        {/* Feeding Section */}
        <Text style={styles.sectionLabel}>FEEDING</Text>
        <View style={styles.cardGroup}>
          {feedingReminders.map((item, i) => (
            <View key={i} style={styles.feedCard}>
              <View style={styles.feedIcon}>
                <Clock size={20} color={colors.primaryGreen} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.feedName}>{item.name}</Text>
                <Text style={styles.feedSpecies}>{item.species}</Text>
              </View>
              <View>
                <Text style={[styles.feedDue, item.urgent && { color: colors.statusWarning }]}>{item.due}</Text>
                <Pressable style={styles.feedActionBtn}>
                  <Text style={styles.feedActionText}>{item.action}</Text>
                </Pressable>
              </View>
            </View>
          ))}
        </View>

        {/* Supplements Section */}
        <Text style={styles.sectionLabel}>SUPPLEMENTS</Text>
        <View style={styles.cardGroup}>
          {supplements.map((item, i) => (
            <View key={i} style={styles.suppRow}>
              <Pill size={18} color={colors.accentGreen} />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={styles.suppName}>{item.name}</Text>
                <Text style={styles.suppSchedule}>{item.schedule} · {item.due}</Text>
              </View>
              <Switch
                value={item.enabled}
                trackColor={{ false: colors.borderSubtle, true: colors.accentGreen }}
                thumbColor={colors.white}
              />
            </View>
          ))}
        </View>

        {/* Cleaning Section */}
        <Text style={styles.sectionLabel}>CLEANING</Text>
        <View style={styles.cardGroup}>
          <View style={styles.suppRow}>
            <Sparkles size={18} color={colors.accentGreen} />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.suppName}>Substrate Refresh</Text>
              <Text style={styles.suppSchedule}>Monthly · Due in 12 days</Text>
            </View>
            <Switch
              value={subRefresh}
              onValueChange={setSubRefresh}
              trackColor={{ false: colors.borderSubtle, true: colors.accentGreen }}
              thumbColor={colors.white}
            />
          </View>
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
  titleRow: { paddingHorizontal: 20, marginBottom: 24 },
  title: { fontSize: 28, fontWeight: '800', color: colors.textPrimary },
  subtitle: { fontSize: 14, color: colors.textSecondary, marginTop: 4 },
  sectionLabel: { fontSize: 11, fontWeight: '700', color: colors.textMuted, letterSpacing: 1.5, paddingHorizontal: 20, marginBottom: 10, marginTop: 8 },
  cardGroup: { paddingHorizontal: 20, marginBottom: 20 },
  feedCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.cardBg, borderRadius: radii.lg, padding: 16, marginBottom: 10, borderWidth: 1, borderColor: colors.borderSubtle },
  feedIcon: { width: 40, height: 40, borderRadius: 12, backgroundColor: colors.lightGreen, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  feedName: { fontSize: 15, fontWeight: '700', color: colors.textPrimary },
  feedSpecies: { fontSize: 12, color: colors.textSecondary, marginTop: 2 },
  feedDue: { fontSize: 12, fontWeight: '600', color: colors.primaryGreen, textAlign: 'right' },
  feedActionBtn: { backgroundColor: colors.lightGreen, paddingHorizontal: 10, paddingVertical: 4, borderRadius: radii.sm, marginTop: 4 },
  feedActionText: { fontSize: 11, fontWeight: '600', color: colors.primaryGreen },
  suppRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.cardBg, borderRadius: radii.lg, padding: 16, marginBottom: 10, borderWidth: 1, borderColor: colors.borderSubtle },
  suppName: { fontSize: 14, fontWeight: '600', color: colors.textPrimary },
  suppSchedule: { fontSize: 12, color: colors.textMuted, marginTop: 2 },
});
