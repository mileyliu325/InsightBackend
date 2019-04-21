"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const ShiftSchema = new Schema({
  // _id: mongoose.Types.ObjectId,
  startTime: { type: Date, default: Date.now },
  endTime: { type: Date, default: Date.now },
  taskId: String,
  area: String
});

const shiftModel = mongoose.model("shift", ShiftSchema);

module.exports = shiftModel;
