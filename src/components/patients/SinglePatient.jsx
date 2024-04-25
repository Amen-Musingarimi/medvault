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
    <Link to="/patients/patient/:patientId" className={classes.patient_link}>
      <div className={classes.details_container}>
        <h4 className={classes.heading}>NAME: </h4>
        <h3 className={classes.value}>
          {patient.firstName.toUpperCase()} {patient.lastName.toUpperCase()}{' '}
        </h3>
      </div>
      <div className={classes.details_container}>
        <h4 className={classes.heading}>ID NUMBER: </h4>
        <h3 className={classes.value}>{patient.idNumber.toUpperCase()}</h3>
      </div>
      <div className={classes.details_container}>
        <h4 className={classes.heading}>AGE: </h4>
        <h3 className={classes.value}>{calculateAge(patient.dateOfBirth)}</h3>
      </div>
      <div className={classes.details_container}>
        <h4 className={classes.heading}>GENDER: </h4>
        <h3 className={classes.value}>{patient.gender.toUpperCase()}</h3>
      </div>
      <div className={classes.details_container}>
        <h4 className={classes.heading}>CELL: </h4>
        <h3 className={classes.value}>{patient.phoneNumber}</h3>
      </div>
    </Link>
  );
};

export default SinglePatient;
