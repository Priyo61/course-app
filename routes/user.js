const { Router } = require("express");

const userRouter = Router();
const { UserModel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");
userRouter.post("/signup", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  // destructure
  //const {email,password,name}=req.body;

  await UserModel.create({
    email: email,
    password: password,
    name: name,
  });
  res.json({
    mgs: "You are sign up",
  });
});
userRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({
    email: email,
    password: password,
  });
  if (user) {
    const token = jwt.sign({ id: user._id }, JWT_USER_PASSWORD);
    res.json({
      token: token,
    });
  } else {
    res.json({
      mgs: "Invalid",
    });
  }
});
userRouter.get("/purchases", (req, res) => {});

module.exports = {
  userRouter: userRouter,
};
