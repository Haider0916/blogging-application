const express = require('express');
const router = express.Router();
const blogRoutes = require('./Blogs');
const commentRoutes = require('./Comments');

router.use('/blogs', blogRoutes);
router.use('/comments', commentRoutes);

module.exports = router;