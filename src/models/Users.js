import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  deliveryAddresses: { type: [String], default: [String] },
  paymentMethod: {
    type: String,
    enum: ["BANK_TRANSFER", "CARD", "CASH_ON_DELIVERY"],
    default: null,
  },
  paymentInfo: { type: mongoose.Schema.Types.Mixed, default: {} },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
