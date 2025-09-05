import Link from "next/link";
import { recipes } from "../../../data";

type Props = { params: { category: string } };

export function generateStaticParams() {
  const cats = Array.from(new Set(recipes.map((r) => r.category)));
  return cats.map((category) => ({ category }));
}

export default function CategoryPage({ params }: Props) {
  const filtered = recipes.filter((r) => r.category === params.category);

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-gray-100">
      <h1 className="text-2xl font-bold mb-6">Category: {params.category}</h1>

      {filtered.length === 0 ? (
        <p className="text-gray-400">No recipes</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((r) => (
            <div
              key={r.slug}
              className="p-4 bg-gray-800/90 rounded-lg shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-white">{r.title}</h2>
              <p className="text-gray-300 mb-2">{r.description}</p>

              <Link
                href={`/recipes/${r.slug}`}
                className="inline-flex items-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/60"
              >
                Подробнее
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
