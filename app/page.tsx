import Link from "next/link";
import { Plane, BookOpen, BarChart3, CheckSquare } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-background">
      <div className="flex-1 w-full max-w-4xl flex flex-col gap-12 p-8">
        
        {/* Capçalera */}
        <div className="text-center mt-12">
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

        {/* Targetes de navegació */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/subjects"
            className="group p-6 rounded-xl border border-border hover:border-blue-500 hover:shadow-lg transition-all"
          >
            <BookOpen className="w-8 h-8 text-blue-500 mb-3" />
            <h2 className="text-xl font-semibold mb-1">Assignatures</h2>
            <p className="text-sm text-muted-foreground">
              Crea i gestiona les teves assignatures amb colors
            </p>
          </Link>

          <Link
            href="/tasks"
            className="group p-6 rounded-xl border border-border hover:border-purple-500 hover:shadow-lg transition-all"
          >
            <CheckSquare className="w-8 h-8 text-purple-500 mb-3" />
            <h2 className="text-xl font-semibold mb-1">Tasques</h2>
            <p className="text-sm text-muted-foreground">
              La teva llista de deures amb dates d'entrega
            </p>
          </Link>

          <Link
            href="/stats"
            className="group p-6 rounded-xl border border-border hover:border-green-500 hover:shadow-lg transition-all"
          >
            <BarChart3 className="w-8 h-8 text-green-500 mb-3" />
            <h2 className="text-xl font-semibold mb-1">Estadístiques</h2>
            <p className="text-sm text-muted-foreground">
              Hores estudiades per assignatura
            </p>
          </Link>

          <Link
            href="/flight"
            className="group p-6 rounded-xl border-2 border-dashed border-blue-500/50 hover:border-blue-500 hover:bg-blue-500/5 transition-all"
          >
            <Plane className="w-8 h-8 text-blue-500 mb-3" />
            <h2 className="text-xl font-semibold mb-1">✈️ Iniciar un vol</h2>
            <p className="text-sm text-muted-foreground">
              Comença una sessió d'estudi amb trajecte
            </p>
          </Link>
        </div>

        <div className="text-center text-xs text-muted-foreground mt-auto pb-8">
          Fet amb ❤️ per a estudiants que estimen volar
        </div>
      </div>
    </main>
  );
}