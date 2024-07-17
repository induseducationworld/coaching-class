const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const studentRoutes = require("./routes/student");

const app = express();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(express.json());
// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/demoClass")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

// Routes
app.use("/students", studentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
