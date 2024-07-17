const { User } = require("../model/user");
const bcrypt = require("bcrypt");

const createAdmin = async () => {
  const user = new User({
    name: "admin",
    password: "admin",
    email: "admin@admin.com",
    category: "ADMIN",
  });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();
  console.log("Admin created.");
};

module.exports = createAdmin;
