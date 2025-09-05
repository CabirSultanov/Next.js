"use client";

import Link from "next/link";
import { Car } from "@/types/car";

interface CarListProps {
  cars: Car[];
  onDelete: (id: string) => void;
}

export default function CarList({ cars, onDelete }: CarListProps) {
  return (
    <div className="space-y-4">
      {cars.map((car) => (
        <div
          key={car.id}
          className="border p-4 rounded flex justify-between items-center"
        >
          <div>
            <h3 className="font-bold">
              {car.brand} {car.model}
            </h3>
            <p>
              {car.year}, {car.color} — ${car.price}
            </p>
          </div>
          <div className="space-x-2">
            <Link
              href={`/edit/${car.id}`}
              className="bg-yellow-500 px-3 py-1 rounded text-white"
            >
              Изменить
            </Link>
            <button
              onClick={() => onDelete(car.id)}
              className="bg-red-500 px-3 py-1 rounded text-white"
            >
              Удалить
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
