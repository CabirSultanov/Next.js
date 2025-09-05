"use client";

import { useEffect, useState } from "react";
import CarList from "@/components/CarList";
import { Car } from "@/types/car";
import { getCars, deleteCar } from "@/lib/api";

export default function CarsPage() {
  const [cars, setCars] = useState<Car[]>([]);

  async function loadCars() {
    const data = await getCars();
    setCars(data);
  }

  async function handleDelete(id: string) {
    await deleteCar(id);
    loadCars();
  }

  useEffect(() => {
    loadCars();
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Список автомобилей</h1>
      <CarList cars={cars} onDelete={handleDelete} />
    </main>
  );
}
