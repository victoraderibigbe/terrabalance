import Address from "@/models/Address";
import connectDB from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function PATCH(req, { params }) {
  await connectDB();
  const { addressId } = params;
  const { userId } = await req.json();

  try {
    // Unset the current preferred address for the user
    await Address.updateMany(
      { user: userId, isPreferred: true },
      { isPreferred: false }
    );

    // Set the new preferred address
    await Address.findByIdAndUpdate(addressId, { isPreferred: true });

    // Return success response
    return NextResponse.json(
      { message: "Preferred address updated successfully" },
      { status: 200 }
    );
  } catch (err) {
    // Return error response
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}
