"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import CarForm from "@/components/CarForm";
import { Car } from "@/types/car";

export default function EditPage() {
  const { id } = useParams();
  const router = useRouter();
  const [car, setCar] = useState<Car | null>(null);

  useEffect(() => {
    fetch("/api/cars")
      .then((res) => res.json())
      .then((data: Car[]) => {
        const found = data.find((c) => c.id === id);
        if (found) setCar(found);
      });
  }, [id]);

  async function handleUpdate(data: Omit<Car, "id">) {
    await fetch(`/api/cars/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    router.push("/cars");
  }

  if (!car) return <p>Загрузка...</p>;

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Редактировать авто</h1>
      <CarForm initialData={car} onSubmit={handleUpdate} />
    </main>
  );
}
