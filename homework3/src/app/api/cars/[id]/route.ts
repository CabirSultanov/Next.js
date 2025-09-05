import { NextResponse } from "next/server";
import { Car } from "@/types/car";
import { cars } from "@/lib/data";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const updatedCar: Partial<Car> = await req.json();
  const index = cars.findIndex((c) => c.id === params.id);

  if (index === -1) {
    return NextResponse.json({ error: "Car not found" }, { status: 404 });
  }

  cars[index] = { ...cars[index], ...updatedCar, id: params.id };

  return NextResponse.json(cars[index]);
}

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  const index = cars.findIndex((c) => c.id === params.id);

  if (index === -1) {
    return NextResponse.json({ error: "Car not found" }, { status: 404 });
  }

  const deleted = cars.splice(index, 1);
  return NextResponse.json(deleted[0]);
}
