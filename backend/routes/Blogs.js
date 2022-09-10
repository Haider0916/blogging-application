const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');
const newBlogValidationSchema = require('../validationSchema/Blog');

// to get all the blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().populate({ path: 'comments' });
    return res.send(blogs);
  } catch (e) {
    return res.status(500).send(e);
  }
});

// to get a single blog
router.get('/:id', (req, res) => {
  return res.send(`<h1>Blogs = GET : ${req.params.id}</h1>`);
});

// to delete a single blog
router.delete('/:id', async (req, res) => {
  try {
    const deletedBlog = await Blog.deleteOne({ _id: req.params.id });
    return res.status(200).json(deletedBlog);
  } catch (error) {
    return res.status(404).send(error);
  }
});

// to post a new blog
router.post('/', async (req, res) => {
  const { error } = newBlogValidationSchema.validate(req.body);

  if (error) return res.status(401).send(error.details[0].message);

  const { author, title, body } = req.body;

  const newBlog = new Blog({
    author,
    title,
    body,
  });

  try {
    await newBlog.save();
    return res.status(201).send(newBlog);
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
});

//to edit a blog
router.put('/:id', async (req, res) => {
  const _id = req.params.id;
  const { body } = req;

  const { error } = newBlogValidationSchema.validate(body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const replacedBlog = await Blog.replaceOne({ _id }, body);
    return res.status(201).send(replacedBlog);
  } catch (e) {
    console.log(e);
    return res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
