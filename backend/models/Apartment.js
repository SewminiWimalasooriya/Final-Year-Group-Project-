import mongoose from "mongoose";

const apartmentSchema = new mongoose.Schema({
  name: String,
  address: String,
  ownerName: String,
  email: String,
  location: {
      lat: Number,
      lng: Number,
   },
  image: {
        type: String
    },
  status: {
    type: String,
    enum: ["approved", "blocked"],
    default: "approved"
  }
},{ timestamps: true });

export default mongoose.model("Apartment", apartmentSchema);