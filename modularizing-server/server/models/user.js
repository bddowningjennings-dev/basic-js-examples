const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: [true, `You are required to have a name`]
  },
  age: Number
}, { timestamps: true });

// here we are attaching the schema to the new Model
mongoose.model('User', UserSchema);