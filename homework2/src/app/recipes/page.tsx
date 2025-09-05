import RecipeCard from "@/components/RecipeCard";
import CategoryMenu from "@/components/CategoryMenu";
import { recipes } from "../../../data";

export const dynamic = "force-static";

export default function RecipesPage() {
  const categories = Array.from(new Set(recipes.map((r) => r.category)));
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">All Recipes</h1>
      </div>

      <CategoryMenu categories={categories} active={null} />

      <div className="grid gap-6 md:grid-cols-2">
        {recipes.map((r) => (
          <RecipeCard key={r.slug} recipe={r} />
        ))}
      </div>
    </div>
  );
}
