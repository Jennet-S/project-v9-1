const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  time: {
    type: String,
    required: true,
  },
  scheduleItem: {
    type: String,
    required: true,
  },
  room: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false, // Default value is set to false
  },
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;
