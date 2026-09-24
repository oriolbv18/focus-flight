import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Plane } from "lucide-react";
import { Suspense } from "react";

async function FlightContent() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/auth/login");

  return (
    <div className="max-w-4xl mx-auto p-8 text-center">
      <Plane className="w-16 h-16 text-blue-500 mx-auto mb-4" />
      <h1 className="text-3xl font-bold mb-2">Pantalla de vol</h1>
      <p className="text-muted-foreground">
        Aquí vindrà el temporitzador i el mapa. Properament!
      </p>
    </div>
  );
}

export default function FlightPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Carregant...</div>}>
      <FlightContent />
    </Suspense>
  );
}