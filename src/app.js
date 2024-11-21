import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"})) //for taking input
app.use(express.urlencoded({extended: true, limit: "16kb"})) // for taking input as URl
app.use(express.static("public")) // for storing files and foler
app.use(cookieParser())

//routes
import userRouter from './routes/user.routes.js'


//routes declaration
app.use("/api/v1/users", userRouter)

export {app}