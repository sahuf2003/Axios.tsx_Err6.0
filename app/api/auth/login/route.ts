// api/auth/login/route.ts
import { NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs/server";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  try {
    // Authenticate the user via Clerk's signIn API
    const signIn = await clerkClient.users.authenticate({ emailAddress: email, password });

    return NextResponse.json({
      message: "Login successful",
      user: { email: signIn.user.emailAddresses[0].emailAddress, firstName: signIn.user.firstName },
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ message: "Authentication failed" }, { status: 401 });
  }
}