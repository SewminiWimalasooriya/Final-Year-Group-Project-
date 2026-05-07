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
    role: {
        type: String,
        enum: ["admin", "owner", "user"],
        default: "user"
    },
    mustChangePassword: {
        type: Boolean,
        default: false
    },


    apartment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Apartment",
        required: function () {
        return this.role !== "admin";
    }
    },

},{ timestamps: true });

export default mongoose.model("User", userschema);
