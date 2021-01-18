"use strict";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const storySchema = new Schema(
  {
    createdAt: Number,
    updatedAt: Number,
    userId: {
      type: ObjectId,
      ref: "user",
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    message: {
      type: String,
      required: true,
      unique: false,
    },
    extra: {
      type: String,
      required: false,
    },
    reviews: [
      {
        description: {
          type: String,
        },
        rating: {
          type: Number,
        },
      },
    ],
  },
  {
    timestamps: { currentTime: () => new Date().getTime() },
  }
);

module.exports = mongoose.model("story", storySchema, "stories");
