import RecipeCard from "@/components/RecipeCard";
import SearchBar from "@/components/SearchBar";
import { recipes } from "@/data";

export default function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const q =
    (searchParams?.query as string | undefined)?.toLowerCase()?.trim() ?? "";
  const filtered = q
    ? recipes.filter((r) => r.title.toLowerCase().includes(q))
    : recipes;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Search Recipes</h1>
      <SearchBar />

      <p className="text-sm text-gray-400 mb-4">Found: {filtered.length}</p>

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((r) => (
          <RecipeCard key={r.slug} recipe={r} />
        ))}
      </div>
    </div>
  );
}
