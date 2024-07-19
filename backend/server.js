const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors"); // Import the cors package
const dotenv = require("dotenv");
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
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
// Connect to MongoDB
mongoose.set("strictQuery", false);

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://dhruvermafz:09112002@cluster0.wwx10kf.mongodb.net/democlass?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MONGODB Database Connected.");
  } catch (err) {
    console.log(err, "MONGODB Database Connection Failed!");
  }
}
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
  connect();
  console.log(`Server is running on port ${PORT}`);
});
