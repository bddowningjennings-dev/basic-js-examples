const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Cannot have a blank name'],
  },
  age: {
    type: Number,
    required: [true, 'Cannot have a blank age']
  }
}, {timestamps: true});

mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');