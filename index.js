const express = require("express");
const yamljs = require("yamljs");
const swaggerUi = require("swagger-ui-express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// 连接atlas数据库
// const uri = "mongodb://user123:user123@cluster0-shard-00-00-dfmqy.mongodb.net:27017,cluster0-shard-00-01-dfmqy.mongodb.net:27017,cluster0-shard-00-02-dfmqy.mongodb.net:27017/insight?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
// mongoose.connect(uri, { useNewUrlParser: true });

// 连接本地数据库
mongoose.connect("mongodb://localhost:27017/insight");

const router = require("./router");

const app = express();

const openapiDoc = yamljs.load("./openapi.yaml");

app.use("/docs", swaggerUi.serve, swaggerUi.setup(openapiDoc));
app.use(bodyParser.json());
app.use(router);

app.listen(3002, () => {
  console.log("Server starts at PORT: 3002");
});
