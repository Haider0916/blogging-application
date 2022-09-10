const express = require('express');
const Blog = require('../models/Blog');
const router = express.Router();
const Comment = require('../models/Comment');
const mongoose = require('mongoose');

// to get all the comments
router.get('/', (req, res) => {
  return res.send('<h1>In the all the comments</h1>');
});

// to post a new comment
router.post('/:id', async (req, res) => {
  const { name, comment } = req.body;
  const blogid = req.params.id;

  const blog = await Blog.findById({ _id: blogid });
  const new_comment = new Comment({
    name: name,
    body: comment,
    blog: blog._id,
  });
  try {
    await new_comment.save();
    try {
      blog.comments.push(new_comment._id);
      await blog.save();
      return res.status(201).send(new_comment);
    } catch (e) {
      return res
        .status(500)
        .send('Server error in saving the new comment in the blogs collection');
    }
  } catch (e) {
    return res.status(500).send('Server error in saving the new comment in the db');
  }
});

//to delete a comment
router.delete('/:id', async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete({ _id: req.params.id });
    try {
      const blog = await Blog.findByIdAndUpdate(
        { _id: mongoose.Types.ObjectId(comment.blog._id) },
        { $pull: { comments: mongoose.Types.ObjectId(comment._id) } },
        { new: true }
      );
      return res.status(204).send('Deleted comment and updated blog document');
    } catch (error) {
      return res.status(500).send('error deleting the comment ref from the parent blog');
    }
  } catch (e) {
    return res.status(500).send('error deleting the comment');
  }
});

module.exports = router;
