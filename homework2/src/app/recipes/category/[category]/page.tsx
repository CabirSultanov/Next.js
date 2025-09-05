import RecipeCard from "@/components/RecipeCard";
import CategoryMenu from "@/components/CategoryMenu";
import { recipes } from "@/data";

export function generateStaticParams() {
  const cats = Array.from(new Set(recipes.map((r) => r.category)));
  return cats.map((category) => ({ category }));
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const categories = Array.from(new Set(recipes.map((r) => r.category)));
  const filtered = recipes.filter((r) => r.category === params.category);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Category: {params.category}</h1>

      <CategoryMenu categories={categories} active={params.category} />

      {filtered.length === 0 ? (
        <p className="text-gray-400">No recipes</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((r) => (
            <RecipeCard key={r.slug} recipe={r} />
          ))}
        </div>
      )}
    </div>
  );
}
