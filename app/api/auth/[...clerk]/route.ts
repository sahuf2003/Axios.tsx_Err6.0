// api/auth/[...clerk]/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();
    return NextResponse.json({ message: "Clerk API route hit", body });
}
