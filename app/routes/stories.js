"user strict";

const express = require("express");
const router = express.Router();
const authorizationCtrl = require("../controllers/authorization");
const storiesCtrl = require("../controllers/stories");
const helperCtrl = require("../helpers");

router.get(
  "/stories",
  authorizationCtrl.checkAdmin,
  storiesCtrl.getStories,
  helperCtrl.responseToJson("stories")
);

router.get(
  "/stories/:_id",
  authorizationCtrl.checkAdmin,
  storiesCtrl.getStoryById,
  helperCtrl.responseToJson("stories")
);

router.delete(
  "/stories/:_id",
  storiesCtrl.getStoryById,
  storiesCtrl.deleteStory,
  helperCtrl.responseToJson("stories")
);

router.post(
  "/stories",
  storiesCtrl.createStory,
  helperCtrl.responseToJson("stories")
);

router.put(
  "/stories/:_id",
  storiesCtrl.getStoryById,
  storiesCtrl.updateStory,
  helperCtrl.responseToJson("stories")
);

module.exports = router;
