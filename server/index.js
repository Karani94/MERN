const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
// const database = require("./config/database.js");
const authRouter = require("./routes/auth.js");
// const postRouter = require("./routes/post.js");

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use("/", authRouter);
// app.use("/", postRouter);

const PORT = process.env.PORT || 5000;

// database();

app.listen(PORT, () => {
  console.log("server is running", PORT);
});
