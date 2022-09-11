const { validationemail, validateLength } = require("../helpers/validation.js");
const bcrypt = require("bcrypt");
const User = require("../models/userModel.js");

exports.register = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      username,
      email,
      password,
      bYear,
      bMonth,
      bDay,
      gender,
    } = req.body;

    // email validation
    if (!validationemail(email)) {
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
        .json({ messagae: "First name must between 3 and 30 character" });
    }

    if (!validateLength(last_name, 3, 30)) {
      return res
        .status(400)
        .json({ messagae: "Last name must between 3 and 30 character" });
    }

    if (!validateLength(password, 3, 30)) {
      return res
        .status(400)
        .json({ messagae: "Password must atleast 6 character" });
    }

    const cryptedPassword = await bcrypt.hash(password, 12);
    console.log(cryptedPassword);

    return;

    const user = await new User({
      first_name,
      last_name,
      username,
      email,
      password,
      bYear,
      bMonth,
      bDay,
      gender,
    }).save();

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
