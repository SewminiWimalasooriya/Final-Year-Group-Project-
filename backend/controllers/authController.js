import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js"
import User from "../models/User.js";
import Apartment from "../models/Apartment.js";

//register user 
export const registerUser = async (req, res) => {
    try {
        //apartmentId send from frontend when user select apartment name 

        const { username, email, password, apartment } = req.body;

        if (!username || !email || !password || !apartment) {
            return res.status(400).json({ success: false, message: 'Please provide name, email, password and apartment name' });
        }

        const apartmentData = await Apartment.findOne({ _id: apartment });

        if (!apartmentData) {
            return res.status(400).json({
                message: "Apartment not approved yet"
            });
        }

        // check inside apartment
        const existingUser = await User.findOne({ email, apartment });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists in this apartment" });
        }

        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        const user = await User.create({
            username,
            email,
            password: hashedPassword,
            role: "user",
            apartment
        });


        await user.save();
       
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Login User
export const loginUser = async (req, res) => {
    try {
        //apartmentId send from frontend when user select apartment name 
        const { email, password, apartment } = req.body;
        console.log("user details",email,password,apartment)

        if (!email || !password|| !apartment) {
            return res.status(400).json({
                message: "Please provide email,apartment and password"
            });
        }
        //find  user 
        const user = await User.findOne({ email, apartment }).populate("apartment");

        if (!user) {
            return res.status(400).json({
                message: "Invaid email or passsword"

            });
        }
        
        //check apartment
        const isMatchApartment = user.apartment._id.toHexString() === apartment;

        if(!isMatchApartment){
            return res.status(400).json({
                message: "Invalid apartment"
            });
        }

        //check password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "invaild password"
            });
        }

        //generate token
        const token = generateToken(user._id);

        
        res.status(200).json({
            message: "Login successful",
            token,
            mustChangePassword: user.mustChangePassword,
            
        });


    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
