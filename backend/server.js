import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js"; 
import User from "./models/User.js";
import authRoutes from "./routes/authRoutes.js";
import apartmentRequestRoutes from "./routes/apartmentRequestRoutes.js";

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// connect DB
connectDB();

// test route
app.get("/", (req, res) => {
  res.send("API running...");
});

//routes
app.use('/api/auth',authRoutes);
app.use('/api/apartment', apartmentRequestRoutes);



// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
