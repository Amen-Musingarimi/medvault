import React from 'react';
import { Link } from 'react-router-dom';

const MedicalRecordsListItem = ({ medicalRecord }) => {
  console.log(medicalRecord);
  function formatDate(dateString) {
    const options = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  }

  return (
    <div>
      <h3>{formatDate(medicalRecord.createdAt)}</h3>
      <p>{medicalRecord.diagnosis}</p>
      <Link>See Details</Link>
    </div>
  );
};

export default MedicalRecordsListItem;
