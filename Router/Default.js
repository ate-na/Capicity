const express = require("express");

const router = express.Router();

const {
  createDefaultCapacity,
  Getdata,
} = require("../Controller/Daycontroller");

router.post("/create", createDefaultCapacity);
router.get("/Getdata", Getdata);
module.exports = router;
