const express = require("express");
const {
  createContact,
  getAllContacts,
  getSingleContact,
  deleteContact,
} = require("../controller/contact");
const router = express.Router();
router.post("/", createContact);
router.get("/:id", getSingleContact);
router.get("/", getAllContacts);
router.delete("/:id", deleteContact);
module.exports = router;
