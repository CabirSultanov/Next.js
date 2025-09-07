import Link from "next/link";

export const dynamicParams = false;

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return users.slice(0, 5).map((user: any) => ({
    id: user.id.toString(),
  }));
}

export default async function UserDetail({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await res.json();

  return (
    <div>
      <h1>{user.name}</h1>
      <Link href={`/users/${params.id}/posts`}>Посмотреть посты</Link>
    </div>
  );
}
