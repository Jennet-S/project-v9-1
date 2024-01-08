// ObservationCard.js
import React from 'react';

const ObservationCard = ({ observation, onDeleteObservation }) => {
  const handleDeleteClick = () => {
    onDeleteObservation(observation._id);
  };

  return (
    <div className='observation-card'>
      <h3>Obs:</h3>
      <p>Temp: {observation.temperature}</p>
      <p>BP: {observation.bloodPressure}</p>
      <p>HR: {observation.heartRate}</p>
      <p>RR: {observation.respiratoryRate}</p>
      <p>Sats: {observation.oxygenSaturations}</p>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
};

export default ObservationCard;
