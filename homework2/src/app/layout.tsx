import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-100">
        <header className="border-b border-gray-800">
          <nav className="container mx-auto p-4 flex gap-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/recipes" className="hover:underline">
              Recipes
            </Link>
            <Link href="/recipes/search" className="hover:underline">
              Search
            </Link>
          </nav>
        </header>
        <main className="container mx-auto p-6 min-h-[calc(100vh-96px)]">
          {children}
        </main>
        <footer className="border-t border-gray-800 p-4 text-center text-sm text-gray-400">
          Recipes v2
        </footer>
      </body>
    </html>
  );
}
