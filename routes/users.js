import express from "express";
import { deleteuser, getAlluser, getuser, updateuser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();



router.get("/checkauthentication" ,verifyToken, (req,res,next) => {
  res.send("You are authenticated");
})


router.get("/checkuser/:id" , verifyUser, (req, res, next) => {
  res.send("You are authenticated, you can delete your id");
});


router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("Hello Admin,You are authenticated, you can delete all id");
});
// update

router.put("/:id",verifyUser, updateuser)

// delete

router.delete("/:id",verifyUser, deleteuser)

// gettin a specific hotel

router.get("/:id",verifyUser, getuser)

// getting all hotel

router.get("/",verifyAdmin, getAlluser)

export default router;
