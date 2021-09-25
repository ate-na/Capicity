const express = require("express");

const router = express.Router();

const { createException } = require("../Controller/Daycontroller");

router.post("/create", createException);

module.exports = router;
