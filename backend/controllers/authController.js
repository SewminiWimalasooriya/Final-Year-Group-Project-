import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js"
import User from "../models/User.js";
import Apartment from "../models/Apartment.js";

//register user 
export const registerUser = async (req, res) => {
    try {
        //apartmentId send from frontend when user select apartment name 
        
        const { username, email, password, role, apartment } = req.body;

        if (!username || !email || !password || !apartment) {
            return res.status(400).json({ success: false, message: 'Please provide name, email, password and apartment name' });
        }

        const apartmentName = await Apartment.findOne({_id: apartment });

        if (!apartmentName) {
            return res.status(400).json({
                message: "Apartment not approved yet"
            });
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
            apartment: apartmentName._id

        });

        await user.save();
        console.log("User saved:", user);
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Login User
export const loginUser = async (req, res) => {
    try{
       const {email, password} = req.body;

       if (!email || !password){
        return res.status(400).json({
            message:"Please provide email and password"
        });
       }
       //find  user 
       const user = await User.findOne({email}).populate("apartment");

       if (!user){
        return res.status(400).json({
            message:"Invaid email or passsword"

        });
       }

       //check password
       const isMatch = await bcrypt.compare(password, user.password);

       if (!isMatch){
        return res.status(400).json({
            message:"invaild password"
        });
       }

       //generate token
       const token = generateToken(user._id);

       //response
       res.status(200).json({
        message:"Login successful",
        token,
        user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role,
                apartment: user.apartment
            }
       });


    }catch (err) {
        res.status(500).json({ error: err.message });
    }
}