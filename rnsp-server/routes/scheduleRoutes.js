const express = require('express');
const scheduleController = require('../controllers/scheduleController');

const router = express.Router();

// Endpoint for getting all schedule items
router.get('/schedules', async (req, res) => {
  try {
    const schedules = await scheduleController.getAllSchedules();
    res.status(200).json(schedules);
  } catch (error) {
    console.error('Error getting all schedules:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Endpoint for adding a schedule item
router.post('/schedules', (req, res) => {
  console.log('Received request to add a schedule item');
  scheduleController.addScheduleItem(req, res);
});

// Endpoint for updating a schedule item by ID
router.put('/schedules/:id', (req, res) => {
  console.log('Received request to update a schedule item');
  scheduleController.updateScheduleItem(req, res);
});

// Endpoint for deleting a schedule item by ID
router.delete('/schedules/:id', (req, res) => {
  console.log('Received request to delete a schedule item');
  scheduleController.deleteScheduleItem(req, res);
});

module.exports = router;
