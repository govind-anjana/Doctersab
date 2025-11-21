import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const sendOtp = async (req, res) => {
  try {
    const { phone } = req.body;

    if (!phone) {
      return res.status(400).json({ success: false, message: "Phone required" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000);

    const response = await axios.post(
      "https://www.fast2sms.com/dev/bulkV2",
      {
        route: "v3",
        sender_id: "TXTIND",
        message: `Your OTP is ${otp}`,
        language: "english",
        flash: 0,
        numbers: phone
      },
      {
        headers: {
          authorization: process.env.FAST2SMS_API_KEY
        }
      }
    );

    res.json({
      success: true,
      otp: otp,
      fast2sms: response.data
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.response?.data || error.message
    });
  }
};

