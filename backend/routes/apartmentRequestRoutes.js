import express from "express";
import { createApartmentRequest, getPendingRequest, approveRequest, rejectRequest } from "../controllers/apartmentRequestController.js";
import {protect} from "../middleware/auth.js";
import {adminOnly} from "../middleware/adminMiddleware.js";
import {validateApartmentRequest} from "../middleware/validateApartment.js"
import { getApprovedApartments, blockaprtment } from "../controllers/apartmentController.js";

const router = express.Router();

//create apratment request
router.post("/create",validateApartmentRequest, createApartmentRequest);


//admin panel
router.get("/pending", getPendingRequest );  //protect, adminOnly,
//admin panel approve button
router.put("/approve/:id", approveRequest);  //protect, adminOnly,
//admin panel reject button
router.put("/reject/:id",rejectRequest); //protect, adminOnly,
//blocked aprtment
router.put("/blocked/:id",blockaprtment)

//get all approved apartment 
router.get("/",getApprovedApartments)

export default router;
