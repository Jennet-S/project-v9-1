import React from 'react';
import TimeBlock from './TimeBlock';

const TimeBlockArea = ({ times, scheduleItems, onTaskCompletion, onDeleteScheduleItem }) => (
  <div className='time-block-area'>
    {times.map((time) => (
      <TimeBlock
        key={time}
        time={time}
        scheduleItems={scheduleItems.filter((item) => item.time === time)}
        onTaskCompletion={onTaskCompletion}
        onDeleteScheduleItem={onDeleteScheduleItem}
      />
    ))}
  </div>
);

export default TimeBlockArea;
