import express from "express";

import {adminRegister,adminLogin} from "../controllers/adminAuthController.js";

const router = express.Router();

router.post("/signup", adminRegister);
router.post("/login", adminLogin);



export default router;