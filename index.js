const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "1234567890";
const { z } = require("zod");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
app.use(express.json());

app.use("/user", userRouter);
app.use("/course", courseRouter);

app.listen(port, () => {
  console.log("connected to server");
});
