const { Router } = require("express");
const adminRouter = Router();
const { AdminModel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_PASSWORD_ADMIN } = require("../config");
const { adminMiddleware } = require("../middleware/admin");
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

adminRouter.post("/course", adminMiddleware, async (req, res) => {
  const adminId = req.userId;
  const { title, description, price } = req.body;

  const course = await CourseModel.create({
    title: title,
    description: description,
    price: price,
    creatorId: adminId,
  });
  res.json({
    mgs: "created course",
    courseId: course._id,
  });
});
module.exports = {
  adminRouter: adminRouter,
};
