const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello, this is users endpoint");
});

module.exports = router;
