

const express = require("express")

const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json())
app.use(cors());



app.get("/", (req,res) => {
    res.send("server is running")
})



const connect = async function main(){
    try {
      await mongoose.connect(process.env.MONGO);
       console.log("Connected to backend");
    } catch (error) {
     
    }

}



app.listen(7000, () => {
    connect();
    console.log("server is running");
})