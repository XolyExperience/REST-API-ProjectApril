const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: {
    type: String,
  },
  date: {
    type: String,
  },
  starttime: {
    type: String,
  },
  endtime: {
    type: String,
  },
  description: {
    type: String,
  },
  location: {
    type: String,
  },
});

module.exports = mongoose.model("Posts", PostSchema);
