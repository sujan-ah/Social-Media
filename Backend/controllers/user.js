const {
  validationEmail,
  validateLength,
  validateUsername,
} = require("../helpers/validation.js");
const bcrypt = require("bcrypt");
const User = require("../models/userModel.js");
const { generateToken } = require("../helpers/tokens.js");

exports.register = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      password,
      bYear,
      bMonth,
      bDay,
      gender,
    } = req.body;

    // email validation
    if (!validationEmail(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    // user validation if user exist or not
    const check = await User.findOne({ email });

    if (check) {
      res.status(400).json({
        message:
          "Already email is exist, Please try different email address to continue",
      });
    }

    // text length check
    if (!validateLength(first_name, 3, 30)) {
      return res
        .status(400)
        .json({ messagae: "First name must be between 3 and 30 character" });
    }

    if (!validateLength(last_name, 3, 30)) {
      return res
        .status(400)
        .json({ messagae: "Last name must be between 3 and 30 character" });
    }

    if (!validateLength(password, 3, 30)) {
      return res
        .status(400)
        .json({ messagae: "Password must be atleast 6 character" });
    }

    // password cryption
    const cryptedPassword = await bcrypt.hash(password, 12);

    // unique user name generation
    const tempUserName = first_name + last_name;
    const newUserName = await validateUsername(tempUserName);

    const user = await new User({
      first_name,
      last_name,
      username: newUserName,
      email,
      password: cryptedPassword,
      bYear,
      bMonth,
      bDay,
      gender,
    }).save();

    const emailVerification = generateToken({ id: user._id }, "30m");
    console.log(emailVerification);

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
