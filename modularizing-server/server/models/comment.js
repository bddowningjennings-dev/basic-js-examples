const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  comment: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }
});

mongoose.model('Comment', CommentSchema);