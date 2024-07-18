const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentController");

router.post("/register", studentController.registerStudent);
router.get("/registrations", studentController.getRegistrations);

router.get("/downloadExcel", studentController.downloadExcel);

module.exports = router;
