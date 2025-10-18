const { Router } = require("express");
const courseRouter = Router();
const { CourseModel } = require("../db");
const { userMiddleware } = require("../middleware/user");
const { PurchaseModel } = require("../db");
courseRouter.post("/purchase", userMiddleware, async (req, res) => {
  const userId = req.body.userId;
  const courseId = req.body.courseId;
  await PurchaseModel.create({
    userId,
    courseId,
  });
  res.json({
    mgs: "You successfully bought course",
  });
});
courseRouter.get("/preview", async (req, res) => {
  const courses = await CourseModel.find({});
  res.json({
    courses,
  });
});

module.exports = {
  courseRouter: courseRouter,
};
