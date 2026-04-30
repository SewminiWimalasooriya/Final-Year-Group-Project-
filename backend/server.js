import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js"; 

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


// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
