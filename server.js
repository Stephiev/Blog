"use strict";

var mongoose = require("mongoose");
var express = require("express");
var app = express();

var postsRoutes = express.Router();

mongoose.connect("mongodb://localhost/posts_development");

require("./routes/postsRoutes")(postsRoutes);

app.use("/api", postsRoutes);

app.listen(process.env.PORT || 3000, function() {
  console.log("server running on port " + (process.env.PORT || 3000));
});
