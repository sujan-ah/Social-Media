const {
  validationEmail,
  validateLength,
  validateUsername,
} = require("../helpers/validation.js");
const bcrypt = require("bcrypt");
const User = require("../models/userModel.js");
const { generateToken } = require("../helpers/tokens.js");
const { sendVerificationEmail } = require("../helpers/mailer.js");

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

    // const emailVerification = generateToken({ id: user._id }, "30m");

    // const url = `${process.env.BASE_URL}/activate/${emailVerification}`;
    // sendVerificationEmail(user.email, user.first_name, url);

    const token = generateToken({ id: user._id.toString() }, "7d");
    console.log(token);

    res.send({
      id: user._id,
      username: user.username,
      first_name: user.first_name,
      last_name: user.last_name,
      token: token,
      varified: user.varified,
      message: "Regiter Success! Activate your email to start",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.activateAccount = async (req, res) => {
  try {
    const { token } = req.body;

    const user = jwt.verify(token, process.env.TOKEN_SECRET);

    if (check.varified == true) {
      return res
        .status(400)
        .json({ message: "This account is already activated" });
    } else {
      await User.findByIdAndUpdate(user.id, { varified: true });
      return res.status(200).json({ message: "Account has been activated" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async () => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne(email);
    if (!user) {
      return res
        .status(400)
        .json({ message: "This email is not connected an account" });
    }
    const check = await bcrypt.compare(password, user.password);
    if (!check) {
      res.status(400).json({ message: "Invalid password. pls try again" });
    }
    const token = generateToken({ id: user._id.toString() }, "7d");
    console.log(token);

    res.send({
      id: user._id,
      username: user.username,
      first_name: user.first_name,
      last_name: user.last_name,
      token: token,
      varified: user.varified,
      message: "Login Success!",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
