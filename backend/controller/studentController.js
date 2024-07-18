const Student = require("../model/student");
const nodemailer = require("nodemailer");
const { parse } = require("json2csv");

// Configure your email transport using SMTP or another method
const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app password
  },
  authMethod: "PLAIN", // Specify authentication method explicitly
});

// Function to send registration confirmation email
const sendConfirmationEmail = async (name, email) => {
  try {
    const mailOptions = {
      to: email,
      from: "TESTING <induseducationworld@gmail.com>", // Your verified sender email
      subject: "Registration Confirmation for Demo Class",
      text: "Hello world?", // plain text body
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for registering for the demo class.</p>
        <p>We will contact you with further details soon.</p>
        <p>Best regards,</p>
        <p>Your Company</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Confirmation email sent to ${email}`);
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    throw error; // Rethrow the error to handle it in the caller function
  }
};

exports.registerStudent = async (req, res) => {
  try {
    const { name, email, number, confirmDroppers } = req.body;

    // Validate required fields (example)
    if (!name || !email || !number) {
      return res
        .status(400)
        .json({ message: "Name, email, and number are required." });
    }

    // Create a new student document
    const newStudent = new Student({
      name,
      email,
      phone: number,
      confirmDroppers,
    });

    // Save the student to the database
    await newStudent.save();

    // Send confirmation email
    await sendConfirmationEmail(name, email);

    res.status(201).json({
      message: "Registration successful! A confirmation email has been sent.",
    });
  } catch (error) {
    console.error("Registration failed:", error);
    res
      .status(500)
      .json({ message: "Registration failed", error: error.message });
  }
};

exports.getRegistrations = async (req, res) => {
  try {
    const students = await Student.find({});
    res.status(200).json(students);
  } catch (error) {
    console.error("Failed to get registrations:", error);
    res
      .status(500)
      .json({ message: "Failed to get registrations", error: error.message });
  }
};

exports.downloadExcel = async (req, res) => {
  try {
    const students = await Student.find({});
    const fields = ["name", "email", "phone", "confirmDroppers"];
    const opts = { fields };

    const csv = parse(students, opts);

    res.header("Content-Type", "text/csv");
    res.attachment("students.csv");
    res.send(csv);
  } catch (error) {
    console.error("Failed to download Excel:", error);
    res
      .status(500)
      .json({ message: "Failed to download Excel", error: error.message });
  }
};
