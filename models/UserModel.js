"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const ShiftSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  startTime: { type: Date, default: Date.now },
  endTime: { type: Date, default: Date.now },
  taskId: String,
  area: String
});

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  role: String,
  phone: String,
  wage: String,
  birthday: { type: Date, default: Date.now },
  shifts: [ShiftSchema]
});

const userModel = mongoose.model("user", UserSchema);

module.exports = userModel;
