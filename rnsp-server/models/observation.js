// Example using Mongoose (for MongoDB)
const mongoose = require('mongoose');

const observationSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  temperature: { type: Number },
  bloodPressure: { type: String },
  heartRate: { type: Number },
  respiratoryRate: { type: Number },
  oxygenSaturation: { type: Number },
  // Additional properties as needed
});

const Observation = mongoose.model('Observation', observationSchema);

module.exports = Observation;
