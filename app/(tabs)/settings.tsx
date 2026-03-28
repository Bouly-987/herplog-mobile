import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {
  User,
  ChevronRight,
  Lock,
  Bell,
  Heart,
  Wrench,
  Download,
  SlidersHorizontal,
  Info,
  Shield,
  FileText,
  LogOut,
} from 'lucide-react-native';
import { colors, spacing, radii } from '../../constants/theme';

function SettingsRow({
  icon: Icon,
  label,
  trailing,
  onPress,
  danger,
}: {
  icon: React.ElementType;
  label: string;
  trailing?: React.ReactNode;
  onPress?: () => void;
  danger?: boolean;
}) {
  return (
    <TouchableOpacity
      style={styles.row}
      onPress={onPress}
      activeOpacity={onPress ? 0.6 : 1}
      disabled={!onPress}
    >
      <View style={styles.rowLeft}>
        <Icon
          size={20}
          color={danger ? colors.statusDanger : colors.accentGreen}
          strokeWidth={1.8}
        />
        <Text style={[styles.rowLabel, danger && styles.rowLabelDanger]}>{label}</Text>
      </View>
      {trailing ?? <ChevronRight size={18} color={colors.textMuted} strokeWidth={1.8} />}
    </TouchableOpacity>
  );
}

function SectionTitle({ title }: { title: string }) {
  return <Text style={styles.sectionTitle}>{title}</Text>;
}

export default function SettingsScreen() {
  const [feedingReminders, setFeedingReminders] = useState(true);
  const [healthAlerts, setHealthAlerts] = useState(true);
  const [maintenance, setMaintenance] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatar}>
            <User size={32} color={colors.white} strokeWidth={1.6} />
          </View>
          <Text style={styles.profileName}>Jane Doe</Text>
          <Text style={styles.profileEmail}>jane.doe@email.com</Text>
        </View>

        {/* Account */}
        <SectionTitle title="Account" />
        <View style={styles.card}>
          <SettingsRow icon={User} label="Edit Profile" onPress={() => {}} />
          <View style={styles.divider} />
          <SettingsRow icon={Lock} label="Change Password" onPress={() => {}} />
        </View>

        {/* Notifications */}
        <SectionTitle title="Notifications" />
        <View style={styles.card}>
          <SettingsRow
            icon={Bell}
            label="Feeding Reminders"
            trailing={
              <Switch
                value={feedingReminders}
                onValueChange={setFeedingReminders}
                trackColor={{ false: colors.border, true: colors.accentGreen }}
                thumbColor={colors.white}
              />
            }
          />
          <View style={styles.divider} />
          <SettingsRow
            icon={Heart}
            label="Health Alerts"
            trailing={
              <Switch
                value={healthAlerts}
                onValueChange={setHealthAlerts}
                trackColor={{ false: colors.border, true: colors.accentGreen }}
                thumbColor={colors.white}
              />
            }
          />
          <View style={styles.divider} />
          <SettingsRow
            icon={Wrench}
            label="Maintenance"
            trailing={
              <Switch
                value={maintenance}
                onValueChange={setMaintenance}
                trackColor={{ false: colors.border, true: colors.accentGreen }}
                thumbColor={colors.white}
              />
            }
          />
        </View>

        {/* Data */}
        <SectionTitle title="Data" />
        <View style={styles.card}>
          <SettingsRow icon={Download} label="Export Data" onPress={() => {}} />
          <View style={styles.divider} />
          <SettingsRow icon={SlidersHorizontal} label="Units & Display" onPress={() => {}} />
        </View>

        {/* About */}
        <SectionTitle title="About" />
        <View style={styles.card}>
          <SettingsRow
            icon={Info}
            label="App Version"
            trailing={<Text style={styles.trailingText}>1.0.0</Text>}
          />
          <View style={styles.divider} />
          <SettingsRow icon={Shield} label="Privacy Policy" onPress={() => {}} />
          <View style={styles.divider} />
          <SettingsRow icon={FileText} label="Terms of Service" onPress={() => {}} />
        </View>

        {/* Sign Out */}
        <TouchableOpacity style={styles.signOutButton} activeOpacity={0.7}>
          <LogOut size={18} color={colors.statusDanger} strokeWidth={1.8} />
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.pageBg,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: spacing.lg,
    paddingVertical: spacing.md,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.accentGreen,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  profileName: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  profileEmail: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    marginBottom: spacing.sm,
    marginTop: spacing.md,
    marginLeft: spacing.xs,
  },
  card: {
    backgroundColor: colors.cardBg,
    borderRadius: radii.xl,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: spacing.md,
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  rowLabel: {
    fontSize: 15,
    color: colors.textPrimary,
    fontWeight: '500',
  },
  rowLabelDanger: {
    color: colors.statusDanger,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.borderSubtle,
    marginLeft: spacing.xxl + spacing.sm,
  },
  trailingText: {
    fontSize: 14,
    color: colors.textMuted,
  },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    marginTop: spacing.xl,
    paddingVertical: 14,
    borderRadius: radii.pill,
    borderWidth: 1.5,
    borderColor: colors.statusDanger,
  },
  signOutText: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.statusDanger,
  },
});
