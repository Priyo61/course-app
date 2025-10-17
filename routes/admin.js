const { Router } = require("express");
const adminRouter = Router();
const { AdminModel } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_PASSWORD_ADMIN = "12345678900";
adminRouter.post("/signup", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  await AdminModel.create({
    email: email,
    password: password,
    name: name,
  });

  res.json({
    mgs: "Admin sign up",
  });
});

adminRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const admin = await AdminModel.findOne({
    email: email,
    password: password,
  });
  if (admin) {
    const token = jwt.sign(
      {
        id: admin._id,
      },
      JWT_PASSWORD_ADMIN
    );
    res.json({
      token: token,
    });
  } else {
    res.json({
      mgs: "admin invalid",
    });
  }
});
module.exports = {
  adminRouter: adminRouter,
};
