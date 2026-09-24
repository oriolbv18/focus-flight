import Link from "next/link";
import { Plane } from "lucide-react";
import { AuthButton } from "@/components/auth-button";
import { Suspense } from "react";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b">
        <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          {/* Logo + Links */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold hover:opacity-80 transition-opacity"
            >
              <Plane className="w-5 h-5 text-blue-500" />
              <span>Focus Flight</span>
            </Link>

            <div className="hidden md:flex items-center gap-1 text-sm">
              <Link
                href="/flight"
                className="px-3 py-1.5 rounded-md hover:bg-accent transition-colors"
              >
                Vol
              </Link>
              <Link
                href="/subjects"
                className="px-3 py-1.5 rounded-md hover:bg-accent transition-colors"
              >
                Assignatures
              </Link>
              <Link
                href="/stats"
                className="px-3 py-1.5 rounded-md hover:bg-accent transition-colors"
              >
                Estadístiques
              </Link>
              <Link
                href="/tasks"
                className="px-3 py-1.5 rounded-md hover:bg-accent transition-colors"
              >
                Tasques
              </Link>
            </div>
          </div>

          {/* Login/Logout */}
          <Suspense>
            <AuthButton />
          </Suspense>
        </nav>
      </header>

      <main className="flex-1">{children}</main>
    </div>
  );
}