import React from 'react';

const ObservationSectionButton = ({ observationVisible, onToggleObservation }) => {
  return (
    <div className='observation-section'>
      <button onClick={onToggleObservation}>
        {observationVisible ? 'Hide Observation' : 'Show Observation'}
      </button>
    </div>
  );
};

export default ObservationSectionButton;
