const mongoose = require('mongoose');
const Post = mongoose.model('Post');

class PostsController {
  index(req, res) {
    res.render('post');
  }
}

module.exports = new PostsController();
