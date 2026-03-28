import { useState, useEffect, useCallback } from "react";
import { supabase } from "../lib/supabase";

export interface Reptile {
  id: string;
  user_id: string;
  name: string;
  species: string;
  morph: string | null;
  sex: "Male" | "Female" | "Unknown";
  date_hatched: string | null;
  acquisition_date: string | null;
  weight_grams: number | null;
  length_cm: number | null;
  source: string | null;
  notes: string | null;
  photo_url: string | null;
  status: "healthy" | "attention" | "critical";
  created_at: string;
  updated_at: string;
}

export function useReptiles() {
  const [reptiles, setReptiles] = useState<Reptile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchReptiles = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("reptiles")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setError(error.message);
    } else {
      setReptiles(data || []);
    }
    setLoading(false);
  }, []);

  const addReptile = async (
    reptile: Omit<Reptile, "id" | "user_id" | "created_at" | "updated_at">
  ) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) throw new Error("Not authenticated");

    const { data, error } = await supabase
      .from("reptiles")
      .insert({ ...reptile, user_id: user.id })
      .select()
      .single();

    if (error) throw error;
    setReptiles((prev) => [data, ...prev]);
    return data;
  };

  const updateReptile = async (id: string, updates: Partial<Reptile>) => {
    const { data, error } = await supabase
      .from("reptiles")
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    setReptiles((prev) => prev.map((r) => (r.id === id ? data : r)));
    return data;
  };

  const deleteReptile = async (id: string) => {
    const { error } = await supabase.from("reptiles").delete().eq("id", id);
    if (error) throw error;
    setReptiles((prev) => prev.filter((r) => r.id !== id));
  };

  useEffect(() => {
    fetchReptiles();
  }, [fetchReptiles]);

  return {
    reptiles,
    loading,
    error,
    fetchReptiles,
    addReptile,
    updateReptile,
    deleteReptile,
  };
}
