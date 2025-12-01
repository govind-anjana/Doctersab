// controllers/userBookingController.js
import UserBooking from "../model/UserBooking.js";

//  Create Booking
export const createBooking = async (req, res) => {
  try {
    const { name, phone, dob, bookingDate, message, location } = req.body;

    // Only name & phone required
    if (!name || name.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Name is required",
      });
    }

    if (!phone || phone.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Phone number is required",
      });
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      return res.status(400).json({
        success: false,
        message: "Phone number must be 10 digits",
      });
    }

    if (!bookingDate || bookingDate.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Booking Date is required",
      });
    }

    if (!location || location.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Location is required",
      });
    }

    // Create Entry (IMPORTANT FIX: date field name)
    const booking = await UserBooking.create({
      name,
      phone,
      dob,
      bookingDate,  
      message,
      location,
    });

    return res.status(201).json({
      success: true,
      message: "Booking created successfully",
      data: booking,
    });
  } catch (error) {
    console.error("Create Booking Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


//  Get All Bookings
export const getBookings = async (req, res) => {
  try {
    const bookings = await UserBooking.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      data: bookings,
    });
  } catch (error) {
    console.error("Get Bookings Error:", error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

//  Get Single Booking
export const getSingleBooking = async (req, res) => {
  try {
    const booking = await UserBooking.findById(req.params.id);
    if (!booking)
      return res
        .status(404)
        .json({ success: false, message: "Booking Not Found" });

    res.status(200).json({ success: true, data: booking });
  } catch (error) {
    console.error("Get Single Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};



//  Delete Booking
export const deleteBooking = async (req, res) => {
  try {
    const booking = await UserBooking.findByIdAndDelete(req.params.id);

    if (!booking)
      return res
        .status(404)
        .json({ success: false, message: "Booking Not Found" });

    res.status(200).json({
      success: true,
      message: "Booking deleted successfully",
    });
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
