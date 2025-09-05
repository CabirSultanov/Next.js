export default async function TodosPage({
  searchParams,
}: {
  searchParams?: { todosError?: string };
}) {
  if (searchParams?.todosError) {
    throw new Error("Ошибка при загрузке задач");
  }

  await new Promise((r) => setTimeout(r, 2000));

  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!res.ok) throw new Error("Не удалось загрузить задачи");

  const todos = await res.json();

  return (
    <div>
      <h2 className="font-bold mb-2">Задачи</h2>
      <ul className="space-y-2">
        {todos.slice(0, 10).map((t: any) => (
          <li key={t.id}>
            <span className={t.completed ? "line-through text-gray-500" : ""}>
              {t.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
