const { Router } = require("express");

const userRouter = Router();

userRouter.post("/signup", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
});
userRouter.post("/signin", (req, res) => {});
userRouter.get("/purchases", (req, res) => {});

module.exports = {
  userRouter: userRouter,
};
