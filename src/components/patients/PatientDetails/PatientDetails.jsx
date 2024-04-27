import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSinglePatient } from '../../../redux/patientsSlice';
import classes from './PatientDetails.module.css';
import { useParams } from 'react-router-dom';

const PatientDetails = () => {
  const dispatch = useDispatch();
  const patient = useSelector((state) => state.pat.patient);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSinglePatient(id));
  }, [dispatch, id]);

  const calculateAge = (dateOfBirth) => {
    const dob = new Date(dateOfBirth);
    const ageDiffMs = Date.now() - dob.getTime();
    const ageDate = new Date(ageDiffMs); // milliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const capitaliseFirstLetter = (gender) => {
    if (!gender) {
      return;
    }
    return gender.charAt(0).toUpperCase() + gender.slice(1);
  };

  return (
    <div className={classes.details_container}>
      <h2>Patient Details</h2>
      <div className={classes.patient_data}>
        <h3>
          <span className={classes.field_name}>Name: </span>
          {patient.firstName} {patient.lastName}
        </h3>
        <h3>
          <span className={classes.field_name}>ID Number: </span>
          {patient.idNumber}
        </h3>
        <h3>
          <span className={classes.field_name}>Date of Birth: </span>
          {patient.dateOfBirth}
        </h3>
        <h3>
          <span className={classes.field_name}>Years: </span>
          {calculateAge(patient.dateOfBirth)}yrs
        </h3>
        <h3>
          <span className={classes.field_name}>Gender: </span>
          {capitaliseFirstLetter(patient.gender)}
        </h3>
        <h3>
          <span className={classes.field_name}>Cell: </span>
          {patient.phoneNumber}
        </h3>
        <h3>
          <span className={classes.field_name}>Email Address: </span>
          {patient.emailAddress}
        </h3>
        <h3>
          <span className={classes.field_name}>Residential Address: </span>
          {patient.residentialAddress}
        </h3>
        <h3>
          <span className={classes.field_name}>Next of Keen: </span>
          {patient.keenFirstName} {patient.keenLastName}
        </h3>
        <h3>
          <span className={classes.field_name}>
            Relationship with Next of Keen:{' '}
          </span>
          {patient.keenRelationship}
        </h3>
        <h3>
          <span className={classes.field_name}>Next of Keen Cell Number: </span>
          {patient.keenPhoneNumber}
        </h3>
        <h3>
          <span className={classes.field_name}>Medical Conditions: </span>
          {patient.medicalConditions}
        </h3>
        <h3>
          <span className={classes.field_name}>Allergies: </span>
          {patient.allergies}
        </h3>
        <h3>
          <span className={classes.field_name}>Disabilities: </span>
          {patient.disability}
        </h3>
        <h3>
          <span className={classes.field_name}>Family Medical History: </span>
          {patient.familyMedicalHistory}
        </h3>
        <h3>
          <span className={classes.field_name}>Surgical History: </span>
          {patient.surgicalHistory}
        </h3>
        <h3>
          <span className={classes.field_name}>Immunization Status: </span>
          {patient.immunizationStatus}
        </h3>
        <h3>
          <span className={classes.field_name}>Date of Birth: </span>
          {patient.dateOfBirth}({calculateAge(patient.dateOfBirth)}yrs)
        </h3>
        <h3>
          <span className={classes.field_name}>Medical Aid Society: </span>
          {patient.medicalAidSociety}
        </h3>
        <h3>
          <span className={classes.field_name}>Policy Holder Name: </span>
          {patient.policyHolderName}
        </h3>
        <h3>
          <span className={classes.field_name}>Policy Number: </span>
          {patient.policyNumber}
        </h3>
        <h3>
          <span className={classes.field_name}>Member Cell Number: </span>
          {patient.memberContactNumber}
        </h3>
      </div>
    </div>
  );
};

export default PatientDetails;
