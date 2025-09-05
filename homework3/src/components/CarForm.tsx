"use client";

import { useState, useEffect } from "react";
import { Car } from "@/types/car";

interface CarFormProps {
  initialData?: Car;
  onSubmit: (data: Omit<Car, "id">) => void;
}

export default function CarForm({ initialData, onSubmit }: CarFormProps) {
  const [formData, setFormData] = useState<Omit<Car, "id">>({
    brand: "",
    model: "",
    year: 2024,
    color: "",
    price: 0,
  });

  useEffect(() => {
    if (initialData) {
      const { id, ...rest } = initialData;
      setFormData(rest);
    }
  }, [initialData]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" || name === "year" ? Number(value) : value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(formData);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        className="border p-2 w-full"
        name="brand"
        value={formData.brand}
        onChange={handleChange}
        placeholder="Марка"
        required
      />
      <input
        className="border p-2 w-full"
        name="model"
        value={formData.model}
        onChange={handleChange}
        placeholder="Модель"
        required
      />
      <input
        className="border p-2 w-full"
        name="year"
        type="number"
        value={formData.year}
        onChange={handleChange}
        placeholder="Год"
        required
      />
      <input
        className="border p-2 w-full"
        name="color"
        value={formData.color}
        onChange={handleChange}
        placeholder="Цвет"
        required
      />
      <input
        className="border p-2 w-full"
        name="price"
        type="number"
        value={formData.price}
        onChange={handleChange}
        placeholder="Цена"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {initialData ? "Сохранить изменения" : "Добавить авто"}
      </button>
    </form>
  );
}
