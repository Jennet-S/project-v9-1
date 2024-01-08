import React from 'react';

const TimeBlock = ({ time, scheduleItems, onTaskCompletion, onDeleteScheduleItem }) => (
  <div className='time-block'>
    <h2>{time}</h2>
    <ul>
      {scheduleItems.map((item, index) => (
        <li key={index} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => onTaskCompletion(item._id, !item.completed)}
          />
          {`${item.time}: ${item.scheduleItem} | Rm: ${item.room}`}
          <button onClick={() => onDeleteScheduleItem(item._id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

export default TimeBlock;
