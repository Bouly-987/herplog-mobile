import { useState, useEffect, useCallback } from "react";
import { supabase } from "../lib/supabase";

export interface Activity {
  id: string;
  reptile_id: string;
  user_id: string;
  type: "feeding" | "shedding" | "growth" | "cleaning";
  title: string | null;
  description: string | null;
  weight_grams: number | null;
  length_cm: number | null;
  log_date: string;
  log_time: string;
  notes: string | null;
  created_at: string;
}

export function useActivities(reptileId?: string) {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchActivities = useCallback(async () => {
    setLoading(true);
    let query = supabase
      .from("activities")
      .select("*")
      .order("log_date", { ascending: false })
      .order("log_time", { ascending: false });

    if (reptileId) {
      query = query.eq("reptile_id", reptileId);
    }

    const { data, error } = await query.limit(50);

    if (error) {
      setError(error.message);
    } else {
      setActivities(data || []);
    }
    setLoading(false);
  }, [reptileId]);

  const logActivity = async (
    activity: Omit<Activity, "id" | "user_id" | "created_at">
  ) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) throw new Error("Not authenticated");

    const { data, error } = await supabase
      .from("activities")
      .insert({ ...activity, user_id: user.id })
      .select()
      .single();

    if (error) throw error;
    setActivities((prev) => [data, ...prev]);
    return data;
  };

  const deleteActivity = async (id: string) => {
    const { error } = await supabase.from("activities").delete().eq("id", id);
    if (error) throw error;
    setActivities((prev) => prev.filter((a) => a.id !== id));
  };

  useEffect(() => {
    fetchActivities();
  }, [fetchActivities]);

  return {
    activities,
    loading,
    error,
    fetchActivities,
    logActivity,
    deleteActivity,
  };
}
