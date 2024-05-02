import React from 'react';
import { Link } from 'react-router-dom';
import classes from './MedicalRecordsListItem.module.css';

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
    <div className={classes.list_item_container}>
      <h3 className={classes.record_date}>
        {formatDate(medicalRecord.createdAt)}
      </h3>
      <p>{medicalRecord.diagnosis}</p>
      <Link>See Details</Link>
    </div>
  );
};

export default MedicalRecordsListItem;
