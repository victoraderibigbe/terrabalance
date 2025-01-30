import bcrypt from "bcryptjs";
import Users from "@/models/Users";
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";

export async function POST(req) {
  await connectDB();
  const { firstName, lastName, email, password } = await req.json();

  try {
    // Check if the user already exists
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new Users({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    // Return the saved user
    return NextResponse.json(savedUser, { status: 201 });
  } catch (err) {
    // Return an error response
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}
