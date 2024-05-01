import React from 'react';
import { Link } from 'react-router-dom';

const MedicalRecordsListItem = ({ medicalRecord }) => {
  console.log(medicalRecord);
  return (
    <div>
      <h3>{medicalRecord.createdAt}</h3>
      <p>{medicalRecord.diagnosis}</p>
      <Link>See Details</Link>
    </div>
  );
};

export default MedicalRecordsListItem;
