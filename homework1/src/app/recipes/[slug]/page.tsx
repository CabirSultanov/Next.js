import Link from "next/link";
import { recipes } from "../../data";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return recipes.map((r) => ({ slug: r.slug }));
}

export default function RecipePage({ params }: Props) {
  const recipe = recipes.find((r) => r.slug === params.slug);
  if (!recipe) return <h1 className="p-6 text-red-400">Recipe not found</h1>;

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-gray-100">
      <nav className="mb-4 text-sm text-gray-400">
        <Link href="/recipes" className="hover:underline">
          Recipes
        </Link>{" "}
        /{" "}
        <Link
          href={`/recipes/category/${recipe.category}`}
          className="hover:underline"
        >
          {recipe.category}
        </Link>{" "}
        / <span className="text-gray-300">{recipe.title}</span>
      </nav>

      <div className="bg-gray-800 p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-4 text-white">{recipe.title}</h1>

        <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
        <ul className="list-disc list-inside mb-6 text-gray-300">
          {recipe.ingredients.map((i, idx) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-2">Steps:</h3>
        <ol className="list-decimal list-inside space-y-1 text-gray-300">
          {recipe.steps.map((s, idx) => (
            <li key={idx}>{s}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
