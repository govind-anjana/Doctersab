// src/routes/AdminRoutes.js
// Import required modules
import express from "express";
import dotenv from "dotenv";
import { AdminLogin, SignUpAdmin } from "../Controller/AdminController.js";

 
dotenv.config();

// Create a router
const router = express.Router();

// ---------------- ROUTES ---------------- //

// Admin signup route
// When admin sends a POST request to /signup, SignUpAdmin function runs
router.post("/signup", SignUpAdmin);

// Admin login route
// When admin sends a POST request to /login, AdminLogin function runs
router.post("/login", AdminLogin);

export default router;
