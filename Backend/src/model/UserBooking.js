// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String ,required:true},
    phone: { type: String, required: true },
    dob: { type: Date ,default:""},
    bookingDate: { type: Date ,required: true},
    message: { type: String, default:""},  
    location: { type: String, required: true},
  },
  { timestamps: true }
);

export default mongoose.model("UserBooking", userSchema);
