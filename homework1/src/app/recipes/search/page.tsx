"use client";

import { useEffect, useState } from "react";
import { recipes } from "../../data";
import Link from "next/link";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(recipes);

  useEffect(() => {
    const q = query.trim().toLowerCase();
    setFiltered(
      q ? recipes.filter((r) => r.title.toLowerCase().includes(q)) : recipes
    );
  }, [query]);

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-gray-100">
      <h1 className="text-2xl font-bold mb-4">Search Recipes</h1>

      <input
        type="text"
        placeholder="Search by title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 mb-6 rounded-lg bg-gray-800 text-gray-100 border border-gray-700 focus:ring-2 focus:ring-blue-500"
      />

      <div className="grid gap-4">
        {filtered.map((r) => (
          <div
            key={r.slug}
            className="p-4 bg-gray-800/90 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="flex items-start justify-between mb-2">
              <h2 className="text-lg font-semibold text-white">{r.title}</h2>

              <Link
                href={`/recipes/category/${r.category}`}
                className="inline-flex items-center rounded-md bg-emerald-600 px-2 py-1 text-xs font-medium text-white hover:bg-emerald-500"
              >
                {r.category}
              </Link>
            </div>

            <Link
              href={`/recipes/${r.slug}`}
              className="mt-2 inline-flex items-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold text-white hover:bg-blue-400"
            >
              Подробнее
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
