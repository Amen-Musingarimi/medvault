import React from 'react';
import { Link } from 'react-router-dom';

const SinglePatient = ({ patient }) => {
  const calculateAge = (dateOfBirth) => {
    const dob = new Date(dateOfBirth);
    const ageDiffMs = Date.now() - dob.getTime();
    const ageDate = new Date(ageDiffMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <Link to="/patients/patient/:patientId">
      <strong>Name:</strong> {patient.firstName} {patient.lastName} <br />
      <strong>ID Number:</strong> {patient.idNumber} <br />
      <strong>Phone Number:</strong> {patient.phoneNumber} <br />
      <strong>Gender:</strong> {patient.gender} <br />
      <strong>Age:</strong> {calculateAge(patient.dateOfBirth)} <br />
      <hr />
    </Link>
  );
};

export default SinglePatient;
