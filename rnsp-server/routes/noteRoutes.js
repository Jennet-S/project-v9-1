// noteRoutes.js
const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');

// Notes
router.post('/notes', noteController.createNote);
router.get('/notes/:id', noteController.getNoteById);  // Assuming you have a route to get a specific note by ID
router.get('/observations/:id/notes', noteController.getAllNotesByObservationId);

module.exports = router;
