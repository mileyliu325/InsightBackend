"use strict";

const Router = require("express").Router;
const router = Router();

//todo: implement DI
const singleGet = require("../controllers/user/single/get");
const singleCreate = require("../controllers/user/single/create");
const singleUpdate = require("../controllers/user/single/update");
const singleDelete = require("../controllers/user/single/delete");

router.get("/user/:id", singleGet);
router.post("/user", singleCreate);
router.put("/user/:id", singleUpdate);
router.delete("/user/:id", singleDelete);

const bulkGet = require("../controllers/user/bulk/get");
const userList = require("../controllers/user/bulk/getall");

router.get("/bulk/users/:ids", bulkGet);

//all user
router.get("/bulk/users", userList);

module.exports = router;
