import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";



import cors from "cors";


import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";



const app = express();

// middleware
app.use(express.json());
app.use(cors());

dotenv.config();

app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelRoute);
app.use("/api/auth", roomsRoute);
app.use("/api/auth", usersRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.get("/", (req, res) => {
  res.send("server is running");
});

const connect = async function main() {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to backend");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("diconnected", () => {
  console.log("mongoDB disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("connected");
});

app.listen(7000, () => {
  connect();
  console.log("server is running");
});
