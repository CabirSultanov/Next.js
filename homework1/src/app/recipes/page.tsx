import Link from "next/link";
import { recipes } from "../data";

export default function RecipesPage() {
  return (
    <div className="p-6 bg-gray-900 min-h-screen text-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">All Recipes</h1>

        <Link
          href="/recipes/search"
          className="inline-flex items-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-purple-500"
        >
          Search
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {recipes.map((r) => (
          <div
            key={r.slug}
            className="p-4 bg-gray-800/90 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="flex items-start justify-between">
              <h2 className="text-xl font-semibold text-white">{r.title}</h2>
              <Link
                href={`/recipes/category/${r.category}`}
                className="inline-flex items-center rounded-md bg-emerald-600 px-2 py-1 text-xs font-medium text-white hover:bg-emerald-500"
              >
                {r.category}
              </Link>
            </div>

            <p className="text-gray-300 mt-2 mb-4">{r.description}</p>

            <Link
              href={`/recipes/${r.slug}`}
              className="inline-flex items-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold text-white hover:bg-blue-400"
            >
              Подробнее
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
