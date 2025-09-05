export default async function UsersPage({
  searchParams,
}: {
  searchParams?: { usersError?: string };
}) {
  if (searchParams?.usersError) {
    throw new Error("Ошибка при загрузке пользователей");
  }

  await new Promise((r) => setTimeout(r, 2000));

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Не удалось загрузить пользователей");

  const users = await res.json();

  return (
    <div>
      <h2 className="font-bold mb-2">Пользователи</h2>
      <ul className="space-y-2">
        {users.map((u: any) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}
