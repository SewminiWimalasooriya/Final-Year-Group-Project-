import mongoose from "mongoose";

const apartmentRequestSchema = new mongoose.Schema({
  name: String,
  address: String,
  ownerName: String,
  email: String,
  phone: String,

  status: {
    type: String,
    enum: ["PENDING", "APPROVED", "REJECTED"],
    default: "PENDING",
  },
  image: {
        type: String
    },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("ApartmentRequest", apartmentRequestSchema);