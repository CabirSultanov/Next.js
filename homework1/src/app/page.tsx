import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <Link
        href="/recipes"
        className="px-6 py-3 rounded-lg bg-blue-600 text-white text-lg font-semibold hover:bg-blue-500 transition"
      >
        Start
      </Link>
    </div>
  );
}
