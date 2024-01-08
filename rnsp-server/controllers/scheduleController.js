const Schedule = require('../models/schedule');

const scheduleController = {
  getAllSchedules: async () => {
    try {
      const schedules = await Schedule.find();
      return schedules;
    } catch (error) {
      console.error('Error getting all schedules:', error);
      throw error;
    }
  },

  addScheduleItem: async (req, res) => {
    try {
      console.log('Received schedule item from the client:', req.body);

      const newScheduleItem = req.body;
      const scheduleItem = new Schedule(newScheduleItem);
      const savedItem = await scheduleItem.save();

      console.log('Saved schedule item to the database:', savedItem);

      res.json(savedItem);
    } catch (error) {
      console.error('Error adding schedule item:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateScheduleItem: async (req, res) => {
    try {
      const scheduleItemId = req.params.id;
      const { completed } = req.body;

      const updatedItem = await Schedule.findByIdAndUpdate(
        scheduleItemId,
        { completed },
        { new: true }
      );

      if (!updatedItem) {
        console.error('Schedule item not found');
        return res.status(404).json({ error: 'Schedule item not found' });
      }

      console.log('Updated schedule item:', updatedItem);
      res.json(updatedItem);
    } catch (error) {
      console.error('Error updating schedule item:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteScheduleItem: async (req, res) => {
    try {
      const scheduleItemId = req.params.id;

      const deletedItem = await Schedule.findByIdAndDelete(scheduleItemId);

      if (!deletedItem) {
        console.error('Schedule item not found');
        return res.status(404).json({ error: 'Schedule item not found' });
      }

      console.log('Deleted schedule item:', deletedItem);
      res.json(deletedItem);
    } catch (error) {
      console.error('Error deleting schedule item:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = scheduleController;
