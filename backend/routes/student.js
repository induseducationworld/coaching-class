const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentController");

router.post("/register", studentController.registerStudent);

module.exports = router;
