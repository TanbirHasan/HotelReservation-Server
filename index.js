

const express = require("express")

const cors = require("cors");
const mongoose = require("mongoose");

const authRoute = require("./routes/auth");
const hotelRoute = require("./routes/hotels");
const roomsRoute = require("./routes/rooms");
const usersRoute = require("./routes/users");

require("dotenv").config();

const app = express();



// middleware
app.use(express.json())
app.use(cors());



app.use("api/auth", authRoute)
app.use("api/hotels", hotelRoute);
app.use("api/auth", roomRoute);
app.use("api/auth", usersRoute);

app.get("/", (req,res) => {
    res.send("server is running")
})



const connect = async function main(){
    try {
      await mongoose.connect(process.env.MONGO);
       console.log("Connected to backend");
    } catch (error) {
        throw error;
     
    }

}

mongoose.connection.on("diconnected", () => {
    console.log("mongoDB disconnected")
})

mongoose.connection.on("connected", () => {
    console.log("connected")
})

app.listen(7000, () => {
    connect();
    console.log("server is running");
})