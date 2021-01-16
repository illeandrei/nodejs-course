"user strict";

const express = require("express");
const router = express.Router();
const authorizationCtrl = require("../controllers/authorization");
const userCtrl = require("../controllers/users");
const helperCtrl = require("../helpers");

router.get(
  "/users",
  authorizationCtrl.checkAdmin,
  userCtrl.getUsers,
  helperCtrl.responseToJson("users")
);

router.get(
  "/users/:_id",
  authorizationCtrl.checkAdmin,
  userCtrl.getUserById,
  helperCtrl.responseToJson("users")
);

router.delete(
  "/users/:_id",
  userCtrl.getUserById,
  userCtrl.deleteUser,
  helperCtrl.responseToJson("users")
);

router.post("/users", userCtrl.createUser, helperCtrl.responseToJson("users"));

router.put(
  "/users/:_id",
  userCtrl.getUserById,
  userCtrl.updateUser,
  helperCtrl.responseToJson("users")
);

module.exports = router;
