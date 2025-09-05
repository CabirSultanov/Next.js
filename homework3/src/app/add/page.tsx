"use client";

import { useRouter } from "next/navigation";
import CarForm from "@/components/CarForm";
import { Car } from "@/types/car";

export default function AddPage() {
  const router = useRouter();

  async function handleAdd(data: Omit<Car, "id">) {
    await fetch("/api/cars", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    router.push("/cars");
  }

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Добавить авто</h1>
      <CarForm onSubmit={handleAdd} />
    </main>
  );
}
