//imports
import "express-async-errors"
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import morgan from 'morgan';


//file imports 
import connectDB from './config/db.js';
import testRoutes from './routes/testRoutes.js';
import authRoutes from './routes/authRoutes.js';
import errroMiddleware from './middlewares/errroMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import jobsRoutes from './routes/jobsRoutes.js';

//config dotenv
dotenv.config()

//mongodb connection
connectDB();

//rest object
const app=express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


//routes
app.use('/api/v1/test',testRoutes);
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/user',userRoutes);
app.use('/api/v1/job',jobsRoutes);


//validation middleware
app.use(errroMiddleware);
//port
const PORT=process.env.PORT || 8080;


//listen
app.listen(PORT,()=>{
    console.log(`Node Server Running in ${process.env.DEV_MODE} mode on port no ${PORT}`.bgCyan.white);
})

