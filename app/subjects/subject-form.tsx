"use client";

import { useState, useTransition } from "react";
import { createSubject } from "./actions";

const COLORS = [
  "#3B82F6", // blau
  "#EF4444", // vermell
  "#10B981", // verd
  "#F59E0B", // taronja
  "#8B5CF6", // porpra
  "#EC4899", // rosa
  "#14B8A6", // teal
  "#6B7280", // gris
];

export function SubjectForm() {
  const [name, setName] = useState("");
  const [color, setColor] = useState(COLORS[0]);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;

    setError(null);
    startTransition(async () => {
      const result = await createSubject(name.trim(), color);
      if (result?.error) {
        setError(result.error);
      } else {
        setName("");
        setColor(COLORS[0]);
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-5 border rounded-xl">
      <div>
        <label className="block text-sm font-medium mb-2">Nom</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ex: Electrònica"
          className="w-full px-3 py-2 border rounded-lg bg-background"
          disabled={isPending}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Color</label>
        <div className="flex flex-wrap gap-2">
          {COLORS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setColor(c)}
              style={{ backgroundColor: c }}
              className={`w-9 h-9 rounded-full transition-transform ${
                color === c
                  ? "ring-2 ring-offset-2 ring-foreground scale-110"
                  : "hover:scale-105"
              }`}
            />
          ))}
        </div>
      </div>

      {error && (
        <p className="text-sm text-red-500">Error: {error}</p>
      )}

      <button
        type="submit"
        disabled={isPending || !name.trim()}
        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-lg font-medium"
      >
        {isPending ? "Creant..." : "Crear assignatura"}
      </button>
    </form>
  );
}