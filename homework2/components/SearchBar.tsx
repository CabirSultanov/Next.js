"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();
  const initial = sp.get("query") ?? "";
  const [value, setValue] = useState(initial);

  useEffect(() => {
    const q = value.trim();
    const params = new URLSearchParams(sp.toString());
    q ? params.set("query", q) : params.delete("query");
    router.push(`${pathname}?${params.toString()}`);
  }, [value]);
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Search by title..."
      className="w-full p-2 mb-6 rounded-lg bg-gray-800 text-gray-100 border border-gray-700 focus:ring-2 focus:ring-blue-500"
    />
  );
}
