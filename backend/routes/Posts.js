const express = require('express');
const Post = require('../modules/Post');
const auth = require('../middleware/auth'); // Authentication middleware
const router = express.Router();

router.post('/createpost', auth, async (req, res) => {
  const { title, content } = req.body;
  try {
    const post = new Post({ title, content, author: req.user.id });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'username');
    console.log(posts);
    
    res.json(posts);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate('author', 'username');
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.json(post);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});


module.exports = router;
