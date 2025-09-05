import Link from "next/link";
import type { Recipe } from "@/data";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="p-4 bg-gray-800/90 rounded-lg shadow hover:shadow-lg transition">
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-white">{recipe.title}</h3>
        <Link
          href={`/recipes/category/${recipe.category}`}
          className="inline-flex items-center rounded-md bg-emerald-600 px-2 py-1 text-xs font-medium text-white hover:bg-emerald-500"
        >
          {recipe.category}
        </Link>
      </div>
      <p className="text-gray-300 mt-2 mb-4">{recipe.description}</p>
      <Link
        href={`/recipes/${recipe.slug}`}
        className="inline-flex items-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold text-white hover:bg-blue-400"
      >
        Подробнее
      </Link>
    </div>
  );
}
