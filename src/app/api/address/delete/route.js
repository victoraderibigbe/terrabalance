import Address from "@/models/Address";
import User from "@/models/Users";
import connectDB from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  const { addressId } = params;
  await connectDB();

  try {
    // Find the address by ID
    const address = await Address.findById(addressId);
    if (!address) {
      return NextResponse.json(
        { message: "Address not found" },
        { status: 404 }
      );
    }

    // Remove the address from the user's addresses array
    await User.updateOne(
      { _id: address.user },
      { $pull: { addresses: address._id } }
    );

    // Delete the address
    await address.remove();

    // Return a success response
    return NextResponse.json(
      { message: "Address deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    // Return an error response
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}
