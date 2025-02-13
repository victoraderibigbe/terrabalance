import Payment from "@/models/Payment";
import User from "@/models/Users";
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";

export async function POST(req) {
  await connectDB();
  const { userId, paymentMethod, paymentDetails } = await req.json();

  try {
    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Create a new payment information
    const newPayment = new Payment({
      user: user._id,
      paymentMethod,
      paymentDetails,
    });

    // Save the payment information to the database
    const savedPayment = await newPayment.save();

    // Add the payment information to the user's payments
    user.payments.push(savedPayment._id);
    await user.save();

    // Return the saved payment information
    return NextResponse.json(
      {
        payment: savedPayment,
      },
      { status: 201 }
    );
  } catch (err) {
    // Return an error response
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}
