import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Utensils, Repeat2, Ruler, Sparkles } from 'lucide-react-native';
import { colors, spacing, radii } from '../../constants/theme';

type ActivityType = 'FEEDING' | 'SHEDDING' | 'GROWTH' | 'CLEANING';

const activityTypes: { key: ActivityType; label: string; icon: React.ElementType }[] = [
  { key: 'FEEDING', label: 'Feeding', icon: Utensils },
  { key: 'SHEDDING', label: 'Shedding', icon: Repeat2 },
  { key: 'GROWTH', label: 'Growth', icon: Ruler },
  { key: 'CLEANING', label: 'Cleaning', icon: Sparkles },
];

export default function LogsScreen() {
  const [activeType, setActiveType] = useState<ActivityType>('FEEDING');
  const [weight, setWeight] = useState('');
  const [length, setLength] = useState('');
  const [logDate, setLogDate] = useState('');
  const [logTime, setLogTime] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>New Activity</Text>
          <Text style={styles.subtitle}>Record a new observation for your reptile</Text>
        </View>

        {/* Activity Type Selector */}
        <View style={styles.typeRow}>
          {activityTypes.map(({ key, label, icon: Icon }) => {
            const isActive = activeType === key;
            return (
              <TouchableOpacity
                key={key}
                style={[styles.typeButton, isActive && styles.typeButtonActive]}
                onPress={() => setActiveType(key)}
                activeOpacity={0.7}
              >
                <Icon
                  size={20}
                  color={isActive ? colors.white : colors.textSecondary}
                  strokeWidth={1.8}
                />
                <Text style={[styles.typeLabel, isActive && styles.typeLabelActive]}>
                  {label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Form Fields - 2 column grid */}
        <View style={styles.grid}>
          <View style={styles.gridHalf}>
            <Text style={styles.fieldLabel}>Weight (grams)</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. 1240"
              placeholderTextColor={colors.textMuted}
              keyboardType="numeric"
              value={weight}
              onChangeText={setWeight}
            />
          </View>
          <View style={styles.gridHalf}>
            <Text style={styles.fieldLabel}>Length (cm)</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. 128"
              placeholderTextColor={colors.textMuted}
              keyboardType="numeric"
              value={length}
              onChangeText={setLength}
            />
          </View>
          <View style={styles.gridHalf}>
            <Text style={styles.fieldLabel}>Log Date</Text>
            <TextInput
              style={styles.input}
              placeholder="MM/DD/YYYY"
              placeholderTextColor={colors.textMuted}
              value={logDate}
              onChangeText={setLogDate}
            />
          </View>
          <View style={styles.gridHalf}>
            <Text style={styles.fieldLabel}>Log Time</Text>
            <TextInput
              style={styles.input}
              placeholder="HH:MM"
              placeholderTextColor={colors.textMuted}
              value={logTime}
              onChangeText={setLogTime}
            />
          </View>
        </View>

        {/* Notes */}
        <View style={styles.notesSection}>
          <Text style={styles.fieldLabel}>Observations & Notes</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Add any observations, behaviors, or notes..."
            placeholderTextColor={colors.textMuted}
            multiline
            numberOfLines={5}
            textAlignVertical="top"
            value={notes}
            onChangeText={setNotes}
          />
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} activeOpacity={0.8}>
          <Text style={styles.saveButtonText}>Save Entry</Text>
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
  header: {
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  typeRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  typeButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.sm,
    backgroundColor: colors.cardBg,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.borderSubtle,
    gap: spacing.xs,
  },
  typeButtonActive: {
    backgroundColor: colors.darkGreen,
    borderColor: colors.darkGreen,
  },
  typeLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  typeLabelActive: {
    color: colors.white,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    marginBottom: spacing.lg,
  },
  gridHalf: {
    width: '47.5%',
    flexGrow: 1,
  },
  fieldLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textSecondary,
    marginBottom: spacing.sm,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  },
  input: {
    backgroundColor: colors.cardBg,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.borderSubtle,
    paddingHorizontal: spacing.md,
    paddingVertical: Platform.OS === 'ios' ? 14 : 12,
    fontSize: 15,
    color: colors.textPrimary,
  },
  notesSection: {
    marginBottom: spacing.lg,
  },
  textArea: {
    backgroundColor: colors.cardBg,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.borderSubtle,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
    paddingBottom: spacing.md,
    fontSize: 15,
    color: colors.textPrimary,
    minHeight: 120,
  },
  saveButton: {
    backgroundColor: colors.darkGreen,
    borderRadius: radii.pill,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});
