const Observation = require('../models/observation');
const patientId = '6599c130eb15412abc7bf778';

const observationController = {
  createObservation: async (req, res) => {
    try {
      const { temperature, bloodPressure, heartRate, respiratoryRate, oxygenSaturation } = req.body;

      const newObservation = await Observation.create({
        patientId: patientId,
        temperature,
        bloodPressure,
        heartRate,
        respiratoryRate,
        oxygenSaturation,
        // Add other fields if needed
      });

      console.log('Observation created successfully:', newObservation);
      res.status(201).json(newObservation);
    } catch (error) {
      console.error('Error creating observation:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getObservationById: async (req, res) => {
    try {
      const observation = await Observation.findById(req.params.id);
      if (!observation) {
        return res.status(404).json({ error: 'Observation not found' });
      }
      res.json(observation);
    } catch (error) {
      console.error('Error fetching observation by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getAllObservationByPatientId: async (req, res) => {
    try {
      const observations = await Observation.find({ patientId: req.params.id });
      res.json(observations);
    } catch (error) {
      console.error('Error fetching observations by patient ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteObservationById: async (req, res) => {
    try {
      const observationId = req.params.id;
      const deletedObservation = await Observation.findByIdAndDelete(observationId);

      if (!deletedObservation) {
        return res.status(404).json({ error: 'Observation not found' });
      }

      res.json({ message: 'Observation deleted successfully' });
    } catch (error) {
      console.error('Error deleting observation by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateObservationById: async (req, res) => {
    try {
      const updatedObservation = await Observation.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedObservation) {
        return res.status(404).json({ error: 'Observation not found' });
      }
      res.json(updatedObservation);
    } catch (error) {
      console.error('Error updating observation by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = observationController;
