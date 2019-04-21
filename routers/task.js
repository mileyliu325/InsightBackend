"use strict";

const Router = require("express").Router;
const router = Router();

const taskGet = require("../controllers/task/single/get");
const taskCreate = require("../controllers/task/single/create");
const taskUpdate = require("../controllers/task/single/update");
const taskDelete = require("../controllers/task/single/delete");

// single task restful apis
router.get("/task/:id", taskGet);
router.post("/task", taskCreate);
router.put("/task/:id", taskUpdate);
router.delete("/task/:id", taskDelete);

const tasksBulkGet = require("../controllers/task/bulk/get");
const taskList = require("../controllers/task/bulk/getall");

// bulk tasks restful apis
router.get("/bulk/tasks/:ids", tasksBulkGet);

router.get("/bulk/tasks", taskList);

module.exports = router;
