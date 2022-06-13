
import express from "express";
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();




// create

router.post("/:hotelId", verifyAdmin, createRoom) 

// update

router.put("/:id",verifyAdmin, updateRoom)

// delete

router.delete("/:id/:hotelId",verifyAdmin, deleteRoom)

// gettin a specific hotel

router.get("/:id", getRoom)

// getting all hotel

router.get("/",getAllRoom)
export default router;
