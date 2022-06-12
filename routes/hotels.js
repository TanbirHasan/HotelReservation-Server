import express from "express";
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotel.js";

import Hotel from "../models/Hotel.js";

import {createError} from "../utils/error.js"
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

// create

router.post("/", verifyAdmin, createHotel) 

// update

router.put("/:id",verifyAdmin, updateHotel)

// delete

router.delete("/:id",verifyAdmin, deleteHotel)

// gettin a specific hotel

router.get("/:id", getHotel)

// getting all hotel

router.get("/",getAllHotel)

export default router;
