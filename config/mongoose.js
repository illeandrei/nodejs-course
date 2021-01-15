"use strict";

module.exports = {
  initMongoose,
};

const mongoose = require("mongoose");

function initMongoose() {
  mongoose.connect("mongodb://127.0.0.1:27017/learn-node", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.on("error", function (err) {
    console.log({ err });
  });

  db.once("open", function () {
    console.log("connected to mongodb");
  });

  process.on("SIGINT", cleanup);
  process.on("SIGTERM", cleanup);
  process.on("SIGHUP", cleanup);
}

function cleanup() {
  console.log("cleanup");
  mongoose.connection.close(function () {
    process.exit();
  });
}
