"use strict";

var Post        = require("../models/Post");
var bodyparser = require("body-parser");

module.exports = function(router) {
  router.use(bodyparser.json());

  router.get("/posts", function(req, res) {
    Post.find({}, function(err, data) {
      if (err) {
        console.log(err);
        return res.status(500).json({ msg: "internal server error." });
      }

      res.json(data);
    });
  });

  router.post("/posts", function(req, res) {
    var newPost = new Post(req.body);
    newPost.save(function(err, data) {
      if (err) {
        console.log(err);
        return res.status(500).json({ msg: "internal server error." });
      }

      setTimeout(function() {res.json(data); }, 500);
    });
  });

};
