import express from 'express'
import connectDB from './utils/db.js';
import dotenv from 'dotenv'

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));



app.get('/', (req,res,next)=>{
    res.send(`<h1>Hello World! </h1>`)
})

app.listen(PORT, ()=>{
    console.log(`server is running at port ${PORT}`)
    connectDB();
})