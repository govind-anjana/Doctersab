// src/routes/UserBookingRoutes.js
import express from "express";
import {
  createBooking,
  getBookings,
  getSingleBooking,
} from "../Controller/UserBookingController.js";
import { verifyAdmin } from "../middleware/Admin.js"; // Middleware to check admin access

// Create a router
const router = express.Router();

// ---------------- ROUTES ---------------- //

// Create a new booking
// Anyone can send a POST request to / to create a booking
router.post("/", createBooking);

// Get all bookings
// Only admin can access this route
router.get("/", verifyAdmin, getBookings);

// Get a single booking by ID
// Anyone can access this route by providing booking ID in URL
router.get("/:id", getSingleBooking);

// Export the router to use in main app
export default router;
