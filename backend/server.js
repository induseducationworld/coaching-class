const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors"); // Import the cors package

const studentRoutes = require("./routes/studentRoute");
const createadmin = require("./controller/createAdmin");

const login = require("./routes/login");
const signup = require("./routes/signup");
const question = require("./routes/question");
const testpaper = require("./routes/testPaper");
const student = require("./routes/student");
const result = require("./routes/result");
const admin = require("./routes/admin");
const snapshots = require("./routes/snapshots");
const audio = require("./routes/audio");
const contact = require("./routes/contact");
const groups = require("./routes/group");

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: true,
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/demoClass")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.use(express.json());

// Routes
app.use("/students", studentRoutes);
app.use("/api/login", login);
app.use("/api/signup", signup);
app.use("/api/questions", question);
app.use("/api/test", testpaper);
app.use("/api/student", student);
app.use("/api/result", result);
app.use("/api/supervisor", admin);
app.use("/api/snapshot", snapshots);
app.use("/api/audio", audio);
app.use("/api/contact", contact);
app.use("/api/groups", groups);

// Uncomment this if you want to create admin on server start
// createadmin();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
