const nodemailer = require("nodemailer");

exports.sendConfirmationEmail = async (email, studentId) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "your-email@gmail.com",
      pass: "your-email-password",
    },
  });

  const mailOptions = {
    from: '"Your Company" <your-email@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Demo Class Registration Confirmation", // Subject line
    html: `<p>Dear Student,</p>
           <p>Thank you for registering for the demo class. Your Student ID is <strong>${studentId}</strong>.</p>
           <p>We look forward to seeing you at the demo class.</p>
           <p>Best regards,</p>
           <p>Your Company</p>`,
  };

  // Send mail with defined transport object
  try {
    await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email: %s", error);
  }
};
