"use strict";

const express = require("express");
const app = express();
const config = require("./config");
const helperCtrl = require("./app/helpers");

//require order is important
require("./config/express").initExpress(app);
require("./config/mongoose").initMongoose();
require("./config/routes").initRoutes(app);

// require("./config/finalRoute").finalRoute(app); //TODO - fix async initRoutes

app.use(function (err, req, res, next) {
  console.log("err", err);
  return res.status(400).json({
    status: "error",
    message: (err && err.message) || "Default error message",
  });
});

app.listen(config.PORT, function () {
  console.log(`App is running on port  ${config.PORT}`);
});
