import cors from "cors";
import cookieParser from "cookie-parser"
import express from "express";
const app = express();


app.use(express.static("public"));
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(express.json());



import userRouter  from "./src/routes/user.route.js";
import movieRouter  from "./src/routes/movie.route.js";
import screenRouter from "./src/routes/screen.route.js";
import seatRouter from "./src/routes/seat.route.js"


app.use("/api/v1/users", userRouter);
app.use("/api/v1/movie", movieRouter);
app.use("/api/v1/screen", screenRouter);
app.use("/api/v1/seats", seatRouter);



export {app};