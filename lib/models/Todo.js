const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  target: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true,
    default: false
  }
});

module.exports = mongoose.model('Todo', Schema);
