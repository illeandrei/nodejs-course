"user strict";

const express = require("express");
const router = express.Router();
const authorizationCtrl = require("../controllers/authorization");
const userCtrl = require("../controllers/users");

router.get("/users", authorizationCtrl.checkAdmin, userCtrl.getUsers);

router.get("/users/:_id", authorizationCtrl.checkAdmin, userCtrl.getUserById);

router.delete("/users/:_id", userCtrl.deleteUser);

router.post("/users", userCtrl.createUser);

router.put("/users", authorizationCtrl.checkAdmin, function (req, res, next) {
  console.log("users route PUT");
  res.json({ text: "hello PUT" });
});

module.exports = router;
