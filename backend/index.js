import express from 'express'
import connectDB from './utils/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './routes/User.routes.js';

dotenv.config();

const PORT =  process.env.PORT || 3000  ;

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
    origin : 'http://localhost:5174/'
}

app.use(cors(corsOptions));

app.use('/api/user', router)

app.listen(PORT, ()=>{
    console.log(`server is running at port ${PORT}`)
    connectDB();
})