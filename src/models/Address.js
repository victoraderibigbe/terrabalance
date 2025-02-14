import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    country: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    street: { type: String, required: true },
    zipCode: { type: String, required: true },
    isPreferred: {
      type: Boolean,
      default: false,
    },
    deliveryOption: {
      type: String,
      enum: ["delivery", "pickup"],
      default: "delivery",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Address ||
  mongoose.model("Address", AddressSchema);
