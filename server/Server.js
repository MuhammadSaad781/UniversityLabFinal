const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const urls = require("./routes/Routes");
dotenv.config();
mongoose.connect(process.env.DATABASE, () => {
  console.log("Database Connected");
});
app.use(express.json());
app.use(cors());
app.use("/app", urls);
app.listen(9000, () => {
  console.log("Server is running");
});
