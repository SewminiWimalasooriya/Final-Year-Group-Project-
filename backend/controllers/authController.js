import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

//register user 
export const registerUser = async (req, res) => {
    try {
        const { username, email, password, role, apartmentName } = req.body;

        if (!username || !email || !password || !apartmentName) {
            return res.status(400).json({ success: false, message: 'Please provide name, email, password and apartment name' });
        }

        //check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Only allow admin role with a special flag (prevent unauthorized admin creation)
        const userRole = role === 'admin' && req.body.adminSecret === process.env.ADMIN_SECRET ? 'admin' : 'user';
        //create user

        const user = new User({
            username,
            email,
            password: hashedPassword,
            role: userRole,
            apartmentName

        });

        await user.save();
        console.log("User saved:", user);
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// //Login User
// export const LoginUser = async (req, res) => {
//     try{

//     }
// }