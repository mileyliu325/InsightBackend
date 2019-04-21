"use strict";

const User = require("../../../models/TaskModel");

module.exports = async (req, res, next) => {
  const result = await User.find();
  if (result) {
    res.statusCode = 200;
    res.send(result);
  } else {
    res.statusCode = 404;
    res.send({
      msg: "no found!"
    });
  }
};
