// AddObservationForm.js
import React, { useState } from 'react';

const AddObservationForm = ({ onSubmit }) => {
  const [temp, setTemp] = useState('');
  const [bp, setBP] = useState('');
  const [hr, setHR] = useState('');
  const [rr, setRR] = useState('');
  const [sats, setSats] = useState('');

  // ...

const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validate inputs
    if (!temp || !bp || !hr || !rr || !sats) {
      console.error('Please fill in all fields');
      return;
    }
  
    // Create a new observation object
    const newObservation = {
      temperature: temp,
      bloodPressure: bp,
      heartRate: hr,
      respiratoryRate: rr,
      oxygenSaturations: sats,
    };
  
    // Call the onSubmit prop to pass the data to the parent component
    onSubmit(newObservation);
  
    // Clear form inputs
    setTemp('');
    setBP('');
    setHR('');
    setRR('');
    setSats('');
  };
  
  // ...
  

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Temp:
        <input type="text" value={temp} onChange={(e) => setTemp(e.target.value)} />
      </label>
      <label>
        BP:
        <input type="text" value={bp} onChange={(e) => setBP(e.target.value)} />
      </label>
      <label>
        HR:
        <input type="text" value={hr} onChange={(e) => setHR(e.target.value)} />
      </label>
      <label>
        RR:
        <input type="text" value={rr} onChange={(e) => setRR(e.target.value)} />
      </label>
      <label>
        Sats:
        <input type="text" value={sats} onChange={(e) => setSats(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddObservationForm;
