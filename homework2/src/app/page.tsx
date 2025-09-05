import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-[60vh] grid place-items-center">
      <Link
        href="/recipes"
        className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500"
      >
        Start
      </Link>
    </div>
  );
}
