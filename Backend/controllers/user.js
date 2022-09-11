const User = require("../models/userModel.js");

exports.register = async (req, res) => {
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
};
