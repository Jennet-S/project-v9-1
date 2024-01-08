const express = require('express');
const router = express.Router();
const observationController = require('../controllers/observationController');

// Observations
router.post('/observations', observationController.createObservation);
router.get('/observations/:id', observationController.getObservationById);
router.get('/patients/:id/observations', observationController.getAllObservationByPatientId);
// Update a patient by ID
router.put('/observations/:id', observationController.updateObservationById);
router.delete('/observations/:id', observationController.deleteObservationById); // New route for deletion

module.exports = router;
