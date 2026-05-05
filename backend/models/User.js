import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: String,
    isApproved: {
        type: Boolean,
        default: false
    },
    apartmentName : {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Apartment",
  },

})

export default mongoose.model("User", userschema);
