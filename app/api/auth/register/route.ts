// api/auth/register/route.ts
import { NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs/server";

export async function POST(request: Request) {
  const { email, password, firstName, lastName } = await request.json();

  try {
    // Register the user with Clerk
    const user = await clerkClient.users.createUser({
      emailAddress: [email],
      password,
      firstName,
      lastName,
    });

    return NextResponse.json({
      message: "Registration successful",
      user: { email: user.emailAddresses[0].emailAddress, firstName: user.firstName, lastName: user.lastName },
    });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ message: "Registration failed" }, { status: 400 });
  }
}