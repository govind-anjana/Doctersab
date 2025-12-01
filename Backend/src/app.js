import express from 'express';
import dotenv from 'dotenv';
import UserBooking from './routes/UserBookingRoutes.js';
dotenv.config();
const app=express();

app.use(express.json());

app.use("/booking",UserBooking);

export default app;