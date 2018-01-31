const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
    default: "",
  },
  completed: {
    type: Boolean,
    default: false,
  }
}, { timestamps: true });

// module.exports = mongoose.model('Task', TaskSchema);  
mongoose.model('Task', TaskSchema);
// you will require this module and register schema for whole app