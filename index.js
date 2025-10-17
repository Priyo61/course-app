const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "1234567890";
const { z } = require("zod");
const { adminRouter } = require("./routes/admin");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");

app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

async function main() {
  await mongoose.connect(
    "mongodb+srv://priyobrata61:E8BSBCZCrWUE1zIR@cluster0.mhbfa7n.mongodb.net/course-app"
  );
  app.listen(port, () => {
    console.log("connected to server");
  });
}
main();
