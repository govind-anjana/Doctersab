// routes/AdminRoutes.js
import express from "express";
import dotenv from "dotenv";
import { AdminLogin, SignUpAdmin } from "../Controller/AdminController.js";
// import { verifyAdmin } from "../middleware/Admin.js";

dotenv.config();
const router = express.Router();
//Admin Sign Up
router.post("/signup",SignUpAdmin);

router.post("/login",AdminLogin)

// Admin login
// router.post("/login", AdminLogin);

// Update admin by ID (Admin Only)
// router.put("/update/:id", verifyAdmin, UpdateAdmin);

// Verify admin token (Admin Only)
// router.get("/check", verifyAdmin, Check);


export default router;
