import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Продажа автомобилей</h1>
      <Link href="/cars" className="text-blue-500">
        Список автомобилей
      </Link>
      <br />
      <Link href="/add" className="text-blue-500">
        Добавить авто
      </Link>
    </main>
  );
}
