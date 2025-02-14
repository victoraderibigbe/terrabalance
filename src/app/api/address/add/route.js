import Address from "@/models/Address";
import User from "@/models/Users";
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";

export async function POST(req) {
  await connectDB();
  const { userId, country, state, city, street, zipCode, deliveryOption } =
    await req.json();

  try {
    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Create a new address
    const newAddress = new Address({
      user: user._id,
      country,
      state,
      city,
      street,
      zipCode,
      deliveryOption,
    });

    // Save the address to the database
    const savedAddress = await newAddress.save();

    // Add the address to the user's addresses
    user.addresses.push(savedAddress._id);
    await user.save();

    // Return the saved address
    return NextResponse.json(
      {
        address: savedAddress,
      },
      { status: 201 }
    );
  } catch (err) {
    // Return an error response
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}
