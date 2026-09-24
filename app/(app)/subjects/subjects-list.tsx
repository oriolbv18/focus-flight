"use client";

import { useTransition } from "react";
import { Trash2 } from "lucide-react";
import { deleteSubject } from "./actions";

type Subject = {
  id: string;
  name: string;
  color: string;
};

export function SubjectsList({ subjects }: { subjects: Subject[] }) {
  const [isPending, startTransition] = useTransition();

  if (subjects.length === 0) {
    return (
      <p className="text-sm text-muted-foreground italic p-5 border border-dashed rounded-xl">
        Encara no tens cap assignatura. Crea'n una a l'esquerra →
      </p>
    );
  }

  return (
    <ul className="space-y-2">
      {subjects.map((s) => (
        <li
          key={s.id}
          className="flex items-center gap-3 p-3 border rounded-xl hover:bg-accent/50 transition-colors"
        >
          <span
            className="w-4 h-4 rounded-full shrink-0"
            style={{ backgroundColor: s.color }}
          />
          <span className="flex-1 font-medium">{s.name}</span>
          <button
            onClick={() => {
            startTransition(async () => {
             await deleteSubject(s.id);
            });
            }}
            disabled={isPending}
            className="p-1.5 hover:bg-red-500/10 rounded-lg text-muted-foreground hover:text-red-500 transition-colors"
            title="Eliminar"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </li>
      ))}
    </ul>
  );
}