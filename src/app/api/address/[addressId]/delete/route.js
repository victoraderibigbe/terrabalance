import Address from "@/models/Address";
import connectDB from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  await connectDB();
  const { addressId } = await params;

  try {
    // Find and delete the address
    const deletedAddress = await Address.findByIdAndDelete(addressId);
    if (!deletedAddress) {
      return NextResponse.json(
        { message: "Address not found" },
        { status: 404 }
      );
    }

    // Return success response
    return NextResponse.json(
      { message: "Address deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    // Return error response
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}
