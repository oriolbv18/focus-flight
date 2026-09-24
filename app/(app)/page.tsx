import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { Plane, BookOpen, BarChart3, CheckSquare } from "lucide-react";

async function Dashboard() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/auth/login");

  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Capçalera */}
      <div className="text-center mt-8 mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Plane className="w-10 h-10 text-blue-500" />
          <h1 className="text-4xl font-bold tracking-tight">
            Focus Flight Study
          </h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Estudia mentre viatges. Registra les teves hores per assignatura.
        </p>
      </div>

      {/* CTA principal: Iniciar vol */}
      <Link
        href="/flight"
        className="block p-8 mb-8 rounded-2xl border-2 border-blue-500/30 hover:border-blue-500 hover:bg-blue-500/5 transition-all group"
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Plane className="w-7 h-7 text-blue-500 group-hover:translate-x-1 transition-transform" />
              <h2 className="text-2xl font-bold">Iniciar un vol</h2>
            </div>
            <p className="text-muted-foreground">
              Comença una sessió d'estudi amb trajecte
            </p>
          </div>
          <span className="text-2xl text-blue-500 group-hover:translate-x-2 transition-transform">
            →
          </span>
        </div>
      </Link>

      {/* Altres targetes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          href="/subjects"
          className="group p-5 rounded-xl border hover:border-blue-500 hover:shadow-md transition-all"
        >
          <BookOpen className="w-7 h-7 text-blue-500 mb-3" />
          <h3 className="text-lg font-semibold mb-1">Assignatures</h3>
          <p className="text-sm text-muted-foreground">
            Gestiona les teves assignatures
          </p>
        </Link>

        <Link
          href="/stats"
          className="group p-5 rounded-xl border hover:border-green-500 hover:shadow-md transition-all"
        >
          <BarChart3 className="w-7 h-7 text-green-500 mb-3" />
          <h3 className="text-lg font-semibold mb-1">Estadístiques</h3>
          <p className="text-sm text-muted-foreground">
            Hores per assignatura
          </p>
        </Link>

        <Link
          href="/tasks"
          className="group p-5 rounded-xl border hover:border-purple-500 hover:shadow-md transition-all"
        >
          <CheckSquare className="w-7 h-7 text-purple-500 mb-3" />
          <h3 className="text-lg font-semibold mb-1">Tasques</h3>
          <p className="text-sm text-muted-foreground">
            La teva llista de deures
          </p>
        </Link>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div className="p-8">Carregant...</div>}>
      <Dashboard />
    </Suspense>
  );
}