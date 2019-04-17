"use strict";

const User = require("../../../models/UserModel");
const mongoose = require("mongoose");

module.exports = async (req, res, next) => {
  try {
    const { body } = req;
    const { id } = req.params;
    //checi if person id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.statusCode = 400;
      res.send({
        msg: "id is invalid!"
      });
    } else {
      //check if shifts exist, if not  create a new one
      if (body.shifts.length > 0) {
        if (
          body.shifts[0]._id &&
          !mongoose.Types.ObjectId.isValid(body.shifts[0]._id)
        ) {
          console.log("1.1 shift id is not valid");
          res.statusCode = 400;
          res.send({
            msg: "shiftid is invalid!"
          });
          return;
        } else {
          console.log("1.2 create new shifts");
          body.shifts[0]._id = new mongoose.Types.ObjectId();
        }
      }
      // transfer id(string) to objectId and check if exits
      const result = await User.findOne({
        _id: new mongoose.Types.ObjectId(id)
      });
      if (result) {
        // only update shift (todo:update shift and other properties)
        if (result.shifts.length > 0) {
          console.log("1.3.1 add new shift into database");
          result.shifts.push(body.shifts[0]);
        } else {
          console.log("1.3.2 only update other properties");
          //only update elements in body
          Object.assign(result, body);
        }

        console.log("1.3.3 update database");

        //update database
        const assign = new User(result);
        await assign.save();

        res.statusCode = 200;
        res.send({
          msg: "updated succeed!",
          id: assign._id
        });
      } else {
        console.log("1.4 no id in req, create a new one");
        // not record in database, create new one
        Object.assign(body, { _id: new mongoose.Types.ObjectId(id) });
        const assign = new User(body);
        await assign.save();
        res.statusCode = 201;
        res.send({
          msg: "created succeed!",
          id: assign._id
        });
      }
    }
  } catch (e) {
    res.statusCode = 500;
    res.send({
      msg: "user update failed!"
    });
    next(e);
  }
};
