export default async function PostDetail({
  params,
}: {
  params: { id: string };
}) {
  await new Promise((r) => setTimeout(r, 2000));

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  if (!res.ok) throw new Error("Не удалось загрузить пост");
  const post = await res.json();

  const userRes = await fetch(
    `https://jsonplaceholder.typicode.com/users/${post.userId}`
  );
  if (!userRes.ok) throw new Error("Не удалось загрузить автора");
  const user = await userRes.json();

  return (
    <div>
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p className="mt-2">{post.body}</p>
      <p className="mt-4 text-sm text-gray-500">Автор: {user.name}</p>
    </div>
  );
}
