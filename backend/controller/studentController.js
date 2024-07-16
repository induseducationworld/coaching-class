const Student = require("../model/student");
const nodemailer = require("nodemailer");

const generateRollNo = () => {
  const digits = "0123456789";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let rollNo = "";

  // Generate 3 random digits
  for (let i = 0; i < 3; i++) {
    rollNo += digits[Math.floor(Math.random() * digits.length)];
  }

  // Append 1 random uppercase letter
  rollNo += letters[Math.floor(Math.random() * letters.length)];

  return rollNo;
};

const generateStudentId = (rollNo, name, phone) => {
  console.log("Generated Roll No:", rollNo); // Check the generated rollNo
  console.log("Name Part:", name.slice(0, 3).toUpperCase());
  console.log("Phone Part:", phone.slice(-2));

  const namePart = name.slice(0, 3).toUpperCase();
  const phonePart = phone.slice(-2);
  const studentId = `${rollNo}${namePart}${phonePart}`;

  console.log("Generated Student ID:", studentId); // Check the generated studentId

  return studentId;
};

const sendConfirmationEmail = async (email, studentId) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "vermadhruv09112002@gmail.com",
      pass: "the.nerdy@guy092002",
    },
  });

  const mailOptions = {
    from: `"Your Company" vermadhruv09112002@gmail.com`,
    to: email,
    subject: "Demo Class Registration Confirmation",
    html: `<p>Dear Student,</p>
           <p>Thank you for registering for the demo class. Your Student ID is <strong>${studentId}</strong>.</p>
           <p>We look forward to seeing you at the demo class.</p>
           <p>Best regards,</p>
           <p>Your Company</p>`,
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email: %s", error);
    throw error;
  }
};

exports.registerStudent = async (req, res) => {
  try {
    const { name, email, phone, demoClassTiming } = req.body;

    const rollNo = generateRollNo();
    const studentId = generateStudentId(rollNo, name, phone);

    const newStudent = new Student({
      name,
      email,
      phone,
      studentId,
      demoClassTiming,
    });

    await newStudent.save();

    await sendConfirmationEmail(email, studentId);

    res.status(201).json({
      message: "Registration successful! A confirmation email has been sent.",
      studentId,
    });
  } catch (error) {
    console.error("Registration failed:", error);
    res.status(500).json({ message: "Registration failed", error });
  }
};
