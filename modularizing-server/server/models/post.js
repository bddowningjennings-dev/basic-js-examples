const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  post: {
    type: String,
    required: [true, `cannot have a blank post`],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'  
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }]
});

mongoose.model('Post', PostSchema);