import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// import sendotpRoutes from '../src/routes/Sentotp.js'
dotenv.config();
const app=express();

app.use(express.json());

app.use("/otp",sendotpRoutes)

export default app;