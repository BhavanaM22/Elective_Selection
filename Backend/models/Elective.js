const mongoose = require('mongoose');

const electiveSchema = new mongoose.Schema({
  Elective_ID: {
    type: String,
    required: true,
    unique: true,
  },
  Elective_Name: {
    type: String,
    required: true,
  },
  Branch: {
    type: String,
    required: true,
  },
  Type: {
    type: String,
    required: true,
    enum: ['Open', 'Professional'],
  },
});

module.exports = mongoose.model('Elective', electiveSchema);
