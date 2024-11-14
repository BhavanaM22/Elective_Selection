const mongoose = require('mongoose');

const studentElectiveMappingSchema = new mongoose.Schema({
  USN: {
    type: String,
    required: true,
    ref: 'Student',
  },
  Elective_ID: {
    type: String,
    required: true,
    ref: 'Elective',
  },
});

module.exports = mongoose.model('StudentElectiveMapping', studentElectiveMappingSchema);
