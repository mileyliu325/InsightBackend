"use strict";
const User = require("../../../models/UserModel");
const mongoose = require("mongoose");

module.exports = async (req, res, next) => {
  try {
    const { body } = req;
    body._id = new mongoose.Types.ObjectId(body._id);
    const user = new User(body);
    await user.save();
    res.statusCode = 201;
    res.send({
      msg: "created succeed!",
      id: user._id
    });
  } catch (e) {
    res.statusCode = 500;
    res.send({
      msg: "person created failed!"
    });
    next(e);
  }
};
