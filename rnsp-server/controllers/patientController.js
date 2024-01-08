const Patient = require('../models/patient');

// Controller function to create a new patient
exports.createPatient = async (req, res) => {
  try {
    console.log('Received patient data:', req.body);

    const newPatient = new Patient(req.body);
    console.log('New Patient Data:', newPatient);
    const savedPatient = await newPatient.save();
    console.log('Saved Patient:', savedPatient);

    res.json(savedPatient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to get all patients
exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to get a specific patient by ID
exports.getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    res.json(patient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to update a patient by ID
exports.updatePatientById = async (req, res) => {
  try {
    const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPatient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to delete a patient by ID
exports.deletePatientById = async (req, res) => {
  try {
    await Patient.findByIdAndDelete(req.params.id);
    res.json({ message: 'Patient deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
