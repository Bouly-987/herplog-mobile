export interface Profile {
  id: string
  email: string
  full_name: string | null
  avatar_url: string | null
  created_at: string
  updated_at: string
}

export interface Reptile {
  id: string
  user_id: string
  name: string
  species: string
  morph: string | null
  sex: 'male' | 'female' | 'unknown' | null
  date_of_birth: string | null
  date_acquired: string | null
  weight_grams: number | null
  length_cm: number | null
  enclosure_type: string | null
  photo_url: string | null
  notes: string | null
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Activity {
  id: string
  reptile_id: string
  user_id: string
  type: 'feeding' | 'cleaning' | 'handling' | 'weighing' | 'measurement' | 'other'
  title: string
  description: string | null
  date: string
  metadata: Record<string, unknown> | null
  created_at: string
  updated_at: string
}

export interface HealthRecord {
  id: string
  reptile_id: string
  user_id: string
  type: 'vet_visit' | 'illness' | 'injury' | 'medication' | 'observation'
  title: string
  description: string | null
  date: string
  vet_name: string | null
  diagnosis: string | null
  treatment: string | null
  follow_up_date: string | null
  is_resolved: boolean
  created_at: string
  updated_at: string
}

export interface ShedRecord {
  id: string
  reptile_id: string
  user_id: string
  start_date: string
  end_date: string | null
  quality: 'complete' | 'partial' | 'stuck' | null
  notes: string | null
  created_at: string
  updated_at: string
}

export interface Equipment {
  id: string
  user_id: string
  reptile_id: string | null
  name: string
  type: string | null
  brand: string | null
  model: string | null
  purchase_date: string | null
  last_maintenance_date: string | null
  notes: string | null
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Reminder {
  id: string
  user_id: string
  reptile_id: string | null
  title: string
  description: string | null
  type: 'feeding' | 'cleaning' | 'vet' | 'medication' | 'maintenance' | 'other'
  frequency: 'once' | 'daily' | 'weekly' | 'biweekly' | 'monthly' | 'custom'
  next_due_date: string
  last_completed_date: string | null
  is_active: boolean
  created_at: string
  updated_at: string
}
