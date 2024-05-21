import React from 'react';
import { Link } from 'react-router-dom';
import classes from './SinglePatient.module.css';

const SinglePatient = ({ patient }) => {
  const calculateAge = (dateOfBirth) => {
    const dob = new Date(dateOfBirth);
    const ageDiffMs = Date.now() - dob.getTime();
    const ageDate = new Date(ageDiffMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <tr key={patient._id}>
      <td>{patient.idNumber}</td>
      <td>{patient.firstName}</td>
      <td>{patient.lastName}</td>
      <td>{patient.gender}</td>
      <td>{calculateAge(patient.dateOfBirth)}</td>
      <td>
        <Link to={`/patients/${patient._id}`}>View</Link>
      </td>
    </tr>
  );
};

export default SinglePatient;
