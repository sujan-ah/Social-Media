const express = require("express");
const router = express.Router();

router.get("/user", function (req, res) {
  res.send("Hello Sir");
});

module.exports = router;
