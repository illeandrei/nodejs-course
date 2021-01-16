"use strict";

module.exports = {
  createStory,
  getStories,
  getStoryById,
  deleteStory,
  updateStory,
};

const Story = require("../models/stories");

function getStories(req, res, next) {
  Story.find()
    .populate("userId")
    .exec(function (err, result) {
      if (err) {
        return res.status(404).json(err);
      }
      req.resources.stories = result;
      return next();
    });
}

function getStoryById(req, res, next) {
  const { _id } = req.params;
  Story.findById({ _id }, function (err, result) {
    if (err) {
      return res.status(404).json(err);
    }
    req.resources.stories = result;
    return next();
  });
}

function createStory(req, res, next) {
  const story = new Story(req.body);

  story.save(function (err, result) {
    if (err) {
      return res.status(404).json(err);
    }
    req.resources.stories = result;
    return next();
  });
}

function deleteStory(req, res, next) {
  const { _id } = req.params;
  Story.deleteOne({ _id }, function (err, result) {
    if (err) {
      return res.status(404).json(err);
    }
    return next();
  });
}

function updateStory(req, res, next) {
  const { _id } = req.params;

  console.log("update", req.body);

  Story.findOneAndUpdate({ _id }, req.body, function (err, result) {
    if (err) {
      return res.status(404).json(err);
    }
    return next();
  });
}
