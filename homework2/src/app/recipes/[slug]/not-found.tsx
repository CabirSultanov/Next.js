import Link from "next/link";

export default function NotFound() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-red-400">Recipe not found</h2>
      <Link href="/recipes" className="text-blue-400 hover:underline">
        Back to recipes
      </Link>
    </div>
  );
}
