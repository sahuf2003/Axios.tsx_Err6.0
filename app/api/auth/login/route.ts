import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  // Handle login logic here
  return NextResponse.json({ message: "Login successful" });
}