import React, { useState, useEffect } from 'react';
import PatientCard from './components/PatientCard';
import AddPatientForm from './components/AddPatientForm';
import AddScheduleForm from './components/AddScheduleForm';
import TimeBlockArea from './components/TimeBlockArea';
import ObservationCard from './components/ObservationCard';
import AddObservationForm from './components/AddObservationForm';
import ObservationSectionButton from './components/ObservationSectionButton';

import './App.css';

const App = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingPatientId, setEditingPatientId] = useState(null);
  const [scheduleItems, setScheduleItems] = useState([]);
  const [observationVisible, setObservationVisible] = useState(false);
  const [observations, setObservations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/patients');
        const data = await response.json();
        setPatients(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchScheduleData = async () => {
      try {
        const scheduleResponse = await fetch('http://localhost:3000/api/schedules');
        const scheduleData = await scheduleResponse.json();
        setScheduleItems(scheduleData);
      } catch (error) {
        console.error('Error fetching schedule data:', error);
      }
    };

    fetchScheduleData();
  }, []);

  const handleAddPatient = async (newPatientData) => {
    try {
      const response = await fetch('http://localhost:3000/api/patients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPatientData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const addedPatient = await response.json();
      setPatients([...patients, addedPatient]);
    } catch (error) {
      console.error('Error adding new patient:', error);
    }
  };

  const handleDeletePatient = async (patientId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/patients/${patientId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setPatients(patients.filter((patient) => patient._id !== patientId));
      console.log(`Patient with ID ${patientId} deleted successfully.`);
    } catch (error) {
      console.error('Error deleting patient:', error);
    }
  };

  const handleUpdatePatient = async (patientId, updatedData) => {
    try {
      const response = await fetch(`http://localhost:3000/api/patients/${patientId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const updatedPatient = await response.json();
      setPatients(patients.map((p) => (p._id === patientId ? updatedPatient : p)));
      setEditingPatientId(null);
    } catch (error) {
      console.error('Error updating patient:', error);
    }
  };

  const handleEditPatient = (patientId) => {
    setEditingPatientId(patientId);
  };

  const handleCancelEdit = () => {
    setEditingPatientId(null);
  };

  const handleAddScheduleItem = async (newScheduleItem) => {
    try {
      const response = await fetch('http://localhost:3000/api/schedules', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newScheduleItem),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const addedScheduleItem = await response.json();
      setScheduleItems([...scheduleItems, addedScheduleItem]);
    } catch (error) {
      console.error('Error adding schedule item:', error);
    }
  };

  const handleTaskCompletion = async (scheduleItemId, completed) => {
    try {
      const response = await fetch(`http://localhost:3000/api/schedules/${scheduleItemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const updatedScheduleItems = scheduleItems.map((item) =>
        item._id === scheduleItemId ? { ...item, completed } : item
      );
      setScheduleItems(updatedScheduleItems);
    } catch (error) {
      console.error('Error updating task completion:', error);
    }
  };

  const handleDeleteScheduleItem = async (scheduleItemId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/schedules/${scheduleItemId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const updatedScheduleItems = scheduleItems.filter((item) => item._id !== scheduleItemId);
      setScheduleItems(updatedScheduleItems);

      console.log(`Schedule item with ID ${scheduleItemId} deleted successfully.`);
    } catch (error) {
      console.error('Error deleting schedule item:', error);
    }
  };

  const times = ['7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm'];

  const handleObservationSubmit = async (newObservation) => {
    try {
      const response = await fetch('http://localhost:3000/api/observations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newObservation),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const addedObservation = await response.json();
      // Update the state with the new observation
      setObservations([...observations, addedObservation]);
      console.log('Observation added successfully:', addedObservation);
    } catch (error) {
      console.error('Error adding observation:', error);
    }
  };
  

  const handleToggleObservation = () => {
    setObservationVisible((prevVisible) => !prevVisible);
  };

  const handleDeleteObservation = async (observationId) => {
    try {
      console.log('Deleting observation with ID:', observationId);

      const response = await fetch(`http://localhost:3000/api/observations/${observationId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Update the state or perform any other actions upon successful deletion
      console.log(`Observation with ID ${observationId} deleted successfully.`);
        // Update React state to trigger a re-render
        setObservations((prevObservations) =>
        prevObservations.filter((observation) => observation._id !== observationId)
      );
    } catch (error) {
      console.error('Error deleting observation:', error);
    }
  };

  return (
    <div>
      <div className='patient-section'>
        <h1>Patients</h1>
        <div className='form-area'>
          <AddPatientForm onAddPatient={handleAddPatient} />
        </div>

        <div className='patient-cards'>
          {loading ? (
            <div>Loading...</div>
          ) : (
            patients.map((patient) => (
              <div key={patient._id} className='patient-card'>
                <PatientCard
                  patient={patient}
                  onDeletePatient={handleDeletePatient}
                  onUpdatePatient={handleUpdatePatient}
                  onEditPatient={handleEditPatient}
                  onCancelEdit={handleCancelEdit}
                  isEditing={editingPatientId === patient._id}
                />
              </div>
            ))
          )}
        </div>
      </div>

      <div className='observation-section'>
        <ObservationSectionButton
          observationVisible={observationVisible}
          onToggleObservation={handleToggleObservation}
        />
        {observationVisible && (
          <div>
            <AddObservationForm onSubmit={handleObservationSubmit} />
            {observations.map((observation) => (
              <ObservationCard
                key={observation._id}
                observation={observation}
                onDeleteObservation={handleDeleteObservation}
              />
            ))}
          </div>
        )}
      </div>

      <div className='schedule-section'>
        <h1>Schedule</h1>
        <div className='form-area'>
          <AddScheduleForm onSubmit={handleAddScheduleItem} />
        </div>
        <TimeBlockArea
          times={times}
          scheduleItems={scheduleItems}
          onTaskCompletion={handleTaskCompletion}
          onDeleteScheduleItem={handleDeleteScheduleItem}
        />
      </div>
    </div>
  );
};

export default App;
