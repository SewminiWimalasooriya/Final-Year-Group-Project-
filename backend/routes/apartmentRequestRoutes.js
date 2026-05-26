import express from "express";
import { createApartmentRequest, getPendingRequest, approveRequest, rejectRequest } from "../controllers/apartmentRequestController.js";
import {protect} from "../middleware/auth.js";
import {adminOnly} from "../middleware/adminMiddleware.js";
import {validateApartmentRequest} from "../middleware/validateApartment.js"
import { getApprovedApartments, blockaprtment, blockList,unBlockedApartment } from "../controllers/apartmentController.js";
import upload from "../middleware/uploadMiddleware.js"

const router = express.Router();

//create apratment request
router.post("/create",upload.single("image"),validateApartmentRequest, createApartmentRequest);


//admin panel
router.get("/pending",protect, adminOnly, getPendingRequest );  
//admin panel approve button
router.put("/approve/:id",protect, adminOnly, approveRequest);  //protect, adminOnly,
//admin panel reject button
router.put("/reject/:id",protect, adminOnly, rejectRequest); //protect, adminOnly,
//blocked aprtment
router.put("/blocked/:id",protect, adminOnly,blockaprtment)
//get all blocked apartment
router.get('/blockedApartments',protect, adminOnly,blockList)
//unblocked apartment
router.put("/unblocked/:id",protect, adminOnly,unBlockedApartment)

//get all approved apartment 
router.get("/",getApprovedApartments)



export default router;
