import Link from "next/link";

export default function CategoryMenu({
  categories,
  active,
}: {
  categories: string[];
  active?: string | null;
}) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <Link
        href="/recipes"
        className={`px-3 py-1.5 rounded-md text-sm font-medium ${
          !active
            ? "bg-purple-600 text-white"
            : "bg-gray-800 text-gray-200 hover:bg-gray-700"
        }`}
      >
        All
      </Link>
      {categories.map((c) => (
        <Link
          key={c}
          href={`/recipes/category/${c}`}
          className={`px-3 py-1.5 rounded-md text-sm font-medium ${
            active === c
              ? "bg-purple-600 text-white"
              : "bg-gray-800 text-gray-200 hover:bg-gray-700"
          }`}
        >
          {c}
        </Link>
      ))}
    </div>
  );
}
