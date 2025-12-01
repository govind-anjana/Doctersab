// routes/userBookingRoutes.js
import express from "express";
import {
  createBooking,
  getBookings,
  getSingleBooking,
  deleteBooking,
} from "../Controller/UserBookingController.js";
import { verifyAdmin } from "../middleware/Admin.js";

const router = express.Router();

router.post("/", createBooking);
router.get("/",verifyAdmin, getBookings);
router.delete("/:id", deleteBooking);

router.get("/:id", getSingleBooking);
export default router;
