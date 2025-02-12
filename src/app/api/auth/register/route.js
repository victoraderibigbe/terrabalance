import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Users from "@/models/Users";
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";

export async function POST(req) {
  await connectDB();
  const {
    firstName,
    lastName,
    email,
    password,
    deliveryAddresses = [],
    paymentMethod = null,
    paymentInfo = {},
  } = await req.json();

  console.log(deliveryAddresses);

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
      deliveryAddresses,
      paymentMethod,
      paymentInfo,
    });

    console.log("New user: ", newUser);

    // Save the user to the database
    const savedUser = await newUser.save();

    console.log("Saved user: ", savedUser);

    // Generate a JWT token
    const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: process.env.JWT_EXPIRATION,
    });

    // Return the saved user
    return NextResponse.json(
      {
        token,
        user: {
          id: savedUser._id,
          firstName: savedUser.firstName,
          lastName: savedUser.lastName,
          email: savedUser.email,
          deliveryAddresses: savedUser.deliveryAddresses,
          paymentMethod: savedUser.paymentMethod,
          paymentInfo: savedUser.paymentInfo,
        },
      },
      { status: 201 }
    );
  } catch (err) {
    // Return an error response
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}
