import { NextResponse } from "next/server";
import { Car } from "@/types/car";
import { cars } from "@/lib/data";

export async function GET() {
  return NextResponse.json(cars);
}

export async function POST(req: Request) {
  const newCar: Car = await req.json();
  newCar.id = Date.now().toString();
  cars.push(newCar);
  return NextResponse.json(newCar, { status: 201 });
}
