const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  studentId: { type: String, required: true },
  demoClassTiming: { type: Date, required: true },
});

module.exports = mongoose.model("Student", studentSchema);
