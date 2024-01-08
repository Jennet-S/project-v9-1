import React, { useState } from 'react';

const AddScheduleForm = ({ onSubmit }) => {
  const [selectedTime, setSelectedTime] = useState('7am');
  const [scheduleItem, setScheduleItem] = useState('');
  const [room, setRoom] = useState('');

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleScheduleItemChange = (e) => {
    setScheduleItem(e.target.value);
  };

  const handleRoomChange = (e) => {
    setRoom(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      time: selectedTime,
      scheduleItem,
      room,
    });

    // Clear form inputs
    setSelectedTime('7am');
    setScheduleItem('');
    setRoom('');
  };

  const times = ['7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm'];

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <select value={selectedTime}
          onChange={handleTimeChange}>
          <option value="" disabled selected>Select a time</option>

          {times.map((time) => (

            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </label>
      <label>
        <input placeholder='Event/task'
          type="text" value={scheduleItem} onChange={handleScheduleItemChange} />
      </label>
      <label>
        <input placeholder='Room'
          type="text" value={room} onChange={handleRoomChange} />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddScheduleForm;
