const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const studentRoutes = require("./routes/student");

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/demoClass", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use("/students", studentRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
