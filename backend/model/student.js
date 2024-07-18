const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  confirmDroppers: { type: Boolean, required: true }, // Add this field to match the form
});

module.exports = mongoose.model("Student", studentSchema);
