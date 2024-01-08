const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

// Create a new patient
router.post('/patients', patientController.createPatient);

// Get all patients
router.get('/patients', patientController.getAllPatients);

// Get a specific patient by ID
router.get('/patients/:id', patientController.getPatientById);

// Update a patient by ID
router.put('/patients/:id', patientController.updatePatientById);

// Delete a patient by ID
router.delete('/patients/:id', patientController.deletePatientById);

module.exports = router;
