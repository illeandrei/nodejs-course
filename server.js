"use strict";

const express = require("express");
const app = express();
const config = require("./config");
const helperCtrl = require("./app/helpers");

//require order is important
require("./config/express").initExpress(app);
require("./config/mongoose").initMongoose();
require("./config/routes").initRoutes(app);

app.listen(config.PORT, function () {
  console.log(`App is running on port  ${config.PORT}`);
});
