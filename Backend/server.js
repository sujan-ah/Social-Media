const express = require("express");
const app = express();
const cors = require("cors");
const { readdirSync } = require("fs");
const mongoose = require("mongoose");

require("dotenv").config();

// middleware
app.use(cors());

// routes
readdirSync("./routes/").map((f) => app.use("/", require("./routes/" + f)));

// database
mongoose.connect(process.env.MONGODB_CONNECTION_URL).then(() => {
  console.log("Mongodb connected");
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`app listening on port ${port}!`));
