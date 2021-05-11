const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// GET all the posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// Submits a post
router.post("/", async (req, res) => {
  const post = new Post({
    id: req.body.id,
    title: req.body.title,
    date: req.body.date,
    starttime: req.body.starttime,
    endtime: req.body.endtime,
    description: req.body.description,
    location: req.body.location,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// GET specific post
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

// DELETE specific post
router.delete("/:postId", async (req, res) => {
  try {
    const removePost = await Post.deleteOne({ _id: req.params.postId });
    res.json(removePost);
  } catch {
    res.json({ message: err });
  }
});

// UPDATE a post
router.patch("/:postId", async (req, res) => {
  try {
    var myquery = { _id: req.params.postId };
    var newvalues = {
      $set: {
        title: req.body.title,
        date: req.body.date,
        starttime: req.body.starttime,
        endtime: req.body.endtime,
        description: req.body.description,
        location: req.body.location,
      },
    };
    console.log(myquery, newvalues);
    const updatePost = await Post.updateOne(myquery, newvalues);
    res.json(updatePost);
  } catch {
    res.json({ message: err });
  }
});

module.exports = router;
