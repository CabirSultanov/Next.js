import Link from "next/link";

export default async function PostsPage({
  searchParams,
}: {
  searchParams?: { postsError?: string };
}) {
  if (searchParams?.postsError) {
    throw new Error("Ошибка при загрузке постов");
  }

  await new Promise((r) => setTimeout(r, 2000));

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Не удалось загрузить посты");

  const posts = await res.json();

  return (
    <div>
      <h2 className="font-bold mb-2">Посты</h2>
      <ul className="space-y-2">
        {posts.slice(0, 10).map((p: any) => (
          <li key={p.id}>
            <Link href={`/dashboard/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
