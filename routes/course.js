const { Router } = require("express");
const courseRouter = Router();
const { CourseModel } = require("../db");
courseRouter.post("/purchase", (req, res) => {});
courseRouter.get("/preview", (req, res) => {});

module.exports = {
  courseRouter: courseRouter,
};
