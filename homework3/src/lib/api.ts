import { Car } from "@/types/car";

const API_URL = "/api/cars";

export async function getCars(): Promise<Car[]> {
  const res = await fetch(API_URL, { cache: "no-store" });
  return res.json();
}

export async function addCar(data: Omit<Car, "id">) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateCar(id: string, data: Omit<Car, "id">) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteCar(id: string) {
  const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  return res.json();
}
