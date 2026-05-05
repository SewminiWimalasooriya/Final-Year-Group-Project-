import mongoose from "mongoose";

const apartmentSchema = new mongoose.Schema({
  name: String,
  address: String,
  ownerName: String,
  email: String,
});

export default mongoose.model("Apartment", apartmentSchema);