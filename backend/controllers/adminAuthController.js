import User from "../models/User.js";
import { generateToken } from "../utils/generateToken.js";
import bcrypt from "bcryptjs";


//register admin
export const adminRegister = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        //check if admin user already exists
        const existAdmin = await User.findOne({ email });

        if (existAdmin) {
            return res.status(400).json({ message: "Admin user already exists" });
        }

        //create new admin 
        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        const user = await User.create({
            username,
            email,
            password: hashedPassword,
            role: "admin",

        });

        res.status(201).json({
         message: "Admin created successfully"
      });
    }catch (err) {

      res.status(500).json({
         error: err.message
      });
    }

};

//admin login 
export const adminLogin = async (req, res) => {

   try {

      const { email, password } = req.body;

      // find admin
      const user = await User.findOne({
         email,
         role: "admin"
      });

      if (!user) {
         return res.status(404).json({
            message: "Admin not found"
         });
      }

      // compare password
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
         return res.status(400).json({
            message: "Invalid credentials"
         });
      }

      // generate token
      const token = generateToken(user._id);

      res.status(200).json({
         message: "Login successful",
         token,
         user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role,
                apartment: user.apartment
            }
      });

   } catch (err) {

      res.status(500).json({
         error: err.message
      });

   }
};