import Address from "@/models/Address";
import connectDB from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { userId } = params;
  await connectDB();

  try {
    // Fetch addresses for the user
    const addresses = await Address.find({ user: userId });

    // Return the addresses
    return NextResponse.json(
      {
        addresses,
      },
      { status: 200 }
    );
  } catch (err) {
    // Return an error response
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}
