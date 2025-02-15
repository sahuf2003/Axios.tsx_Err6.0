// app/api/test/route.ts

import { NextResponse } from 'next/server';
import { connectToMongo } from '../../../lib/mongodb';
import User from '../../../models/User';
import bcrypt from 'bcryptjs';

export const GET = async (req: Request) => {
  try {
    await connectToMongo();

    const { searchParams } = new URL(req.url);
    const role = searchParams.get('role');

    let users;
    if (role) {
      users = await User.find({ role });
    } else {
      users = await User.find({});
    }

    return NextResponse.json(users);
  } catch (error) {
    console.error('Error during GET request:', error);
    return NextResponse.json({ error: 'Error fetching users' }, { status: 500 });
  }
};

export const POST = async (req: Request) => {
  try {
    await connectToMongo();

    const { name, email, password, role } = await req.json();

    if (!["admin", "freelancer"].includes(role)) {
      return NextResponse.json({ error: "Invalid role" }, { status: 400 });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashedPassword, role });
    await newUser.save();

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error('Error during POST request:', error);
    return NextResponse.json({ error: 'Error creating user' }, { status: 500 });
  }
};
