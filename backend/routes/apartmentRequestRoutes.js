import express from "express";
import { createApartmentRequest, getPendingRequest, approveRequest, rejectRequest } from "../controllers/apartmentRequestController.js";

const router = express.Router();

//create apratment request
router.post("/create", createApartmentRequest);


//admin panel
router.get("/pending",getPendingRequest );
//admin panel approve button
router.put("/approve/:id",approveRequest);
//admin panel reject button
router.put("/reject/:id",rejectRequest);

export default router;
