"use strict";

module.exports = {
  createUser,
  getUsers,
  getUserById,
  deleteUser,
};

const User = require("../models/users");

function getUsers(req, res, next) {
  User.find(function (err, result) {
    if (err) {
      return res.status(404).json(err);
    }
    return res.json(result);
  });
}

function getUserById(req, res, next) {
  const { _id } = req.params;
  User.findById({ _id }, function (err, result) {
    if (err) {
      return res.status(404).json(err);
    }
    return res.json(result);
  });
}

function createUser(req, res, next) {
  const user = new User(req.body);

  user.save(function (err, result) {
    if (err) {
      return res.status(404).json(err);
    }
    return res.json(result);
  });
}

function deleteUser(req, res, next) {
  const { _id } = req.params;
  User.deleteOne({ _id }, function (err, result) {
    if (err) {
      return res.status(404).json(err);
    }
    return res.json(result);
  });
}