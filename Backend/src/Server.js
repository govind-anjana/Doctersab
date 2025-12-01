import cors from 'cors';
import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './config/db.js';
dotenv.config();

app.use(cors());

const PORT=process.env.PORT || 8080 ;
connectDB();

app.listen(PORT,()=>{
    console.log(`npm Start : http://localhost:${PORT}`)
})
