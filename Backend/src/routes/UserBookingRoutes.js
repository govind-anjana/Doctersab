// routes/userBookingRoutes.js
import express from "express";
import {
  createBooking,
  getBookings,
  getSingleBooking,
  deleteBooking,
} from "../Controller/UserBookingController.js";

const router = express.Router();

router.post("/", createBooking);
router.get("/", getBookings);
router.get("/:id", getSingleBooking);
router.delete("/:id", deleteBooking);

export default router;
