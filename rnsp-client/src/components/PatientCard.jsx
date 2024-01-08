import React, { useEffect, useState } from 'react';
import EditPatientForm from './EditPatientForm';
// import ObservationCard from './ObservationCard';
// import AddObservationForm from './AddObservationForm'; // Import AddObservationForm

const PatientCard = ({
  patient,
  onDeletePatient,
  onUpdatePatient,
  onEditPatient,
  onCancelEdit,
  isEditing,
}) => {

  const handleDelete = () => {
    onDeletePatient(patient._id);
  };

  const handleEdit = () => {
    onEditPatient(patient._id);
  };

  const handleCancel = () => {
    onCancelEdit();
  };

  return (
    <div>
      {isEditing ? (
        // Render the edit form when editing
        <div>
          <EditPatientForm patient={patient} onUpdatePatient={onUpdatePatient} />
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        // Render the regular patient card when not editing
        <div>
          <button onClick={handleDelete}>Delete</button>           <button onClick={handleEdit}>Edit</button>
          <p>Rm: {patient.room} | NHI: {patient.nhi}</p>
          <h2>{patient.lastName}, {patient.firstName} {patient.age} yr</h2>
          <p>Dx: {patient.diagnosis}</p>
          <p>MHx: {patient.history}</p>
          <p>Resus: {patient.resus}</p>
</div>
      )}
    </div>
  );
};

export default PatientCard;
