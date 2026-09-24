import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { SubjectForm } from "./subject-form";
import { SubjectsList } from "./subjects-list";
import { Suspense } from "react";

async function SubjectsData() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/auth/login");

  const { data: subjects } = await supabase
    .from("subjects")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <>
      <div>
        <h2 className="text-lg font-semibold mb-4">Afegir nova</h2>
        <SubjectForm />
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-4">
          Actuals ({subjects?.length ?? 0})
        </h2>
        <SubjectsList subjects={subjects ?? []} />
      </div>
    </>
  );
}

export default function SubjectsPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Les meves assignatures</h1>
        <p className="text-muted-foreground">
          Crea les assignatures que estudiaràs durant els vols
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Suspense fallback={<p>Carregant...</p>}>
          <SubjectsData />
        </Suspense>
      </div>
    </div>
  );
}