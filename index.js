const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "1234567890";
const { z } = require("zod");
app.use(express.json());

app.post("/user/signup", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
});
app.post("/user/signin", (req, res) => {});
app.get("/user/purchases", (req, res) => {});
app.post("/course/purchase", (req, res) => {});
app.get("/courses", (req, res) => {});

app.listen(port, () => {
  console.log("connected to server");
});
