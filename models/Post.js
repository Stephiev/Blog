"use strict";

var mongoose = require("mongoose");

var postSchema = mongoose.Schema({
  title:  String,
  author: String,
  body:   String,
  date: { type: Date, default: Date.now },
  comments: [{ body: String, date: Date, person: String }],
});

module.exports = mongoose.model("Post", postSchema);
