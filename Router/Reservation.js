const express = require("express");

const router = express.Router();

const { createReservation } = require("../Controller/Daycontroller");

router.post("/create", createReservation);

module.exports = router;
