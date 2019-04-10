"use strict";

const Router = require("express").Router;
const router = Router();

router.get("/", (req, res, next) => {
  res.redirect("/docs");
});

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

router.use(userRouter);
router.use(taskRouter);

module.exports = router;
