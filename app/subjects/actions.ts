"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function createSubject(name: string, color: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return { error: "No autenticat" };

  const { error } = await supabase.from("subjects").insert({
    user_id: user.id,
    name,
    color,
  });

  if (error) return { error: error.message };

  revalidatePath("/subjects");
  return { success: true };
}

export async function deleteSubject(id: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return { error: "No autenticat" };

  const { error } = await supabase
    .from("subjects")
    .delete()
    .eq("id", id)
    .eq("user_id", user.id);

  if (error) return { error: error.message };

  revalidatePath("/subjects");
  return { success: true };
}
