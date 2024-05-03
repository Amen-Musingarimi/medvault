import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSinglePatient } from '../../../redux/patientsSlice';
import classes from './PatientDetails.module.css';
import { Link, useParams } from 'react-router-dom';

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
      <h2 className={classes.section_heading}>
        <span className={classes.patient_name}>{patient.firstName}'s</span>{' '}
        Details
      </h2>
      <div className={classes.patient_data}>
        <div className={classes.details}>
          <h3 className={classes.field_name}>Name: </h3>
          <h4 className={classes.field_value}>
            {patient.firstName} {patient.lastName}
          </h4>
        </div>
        <div className={classes.details}>
          <h3 className={classes.field_name}>ID Number: </h3>
          <h4 className={classes.field_value}>{patient.idNumber}</h4>
        </div>
        <div className={classes.details}>
          <h3 className={classes.field_name}>Date of Birth: </h3>
          <h4 className={classes.field_value}>{patient.dateOfBirth}</h4>
        </div>
        <div className={classes.details}>
          <h3 className={classes.field_name}>Years: </h3>
          <h4 className={classes.field_value}>
            {calculateAge(patient.dateOfBirth)}yrs
          </h4>
        </div>
        <div className={classes.details}>
          <h3 className={classes.field_name}>Gender: </h3>
          <h4 className={classes.field_value}>
            {capitaliseFirstLetter(patient.gender)}
          </h4>
        </div>
        <div className={classes.details}>
          <h3 className={classes.field_name}>Cell: </h3>
          <h4 className={classes.field_value}>{patient.phoneNumber}</h4>
        </div>
        <div className={classes.details}>
          <h3 className={classes.field_name}>Email Address: </h3>
          <h4 className={classes.field_value}>{patient.emailAddress}</h4>
        </div>
        <div className={classes.details}>
          <h3 className={classes.field_name}>Residential Address: </h3>
          <h4 className={classes.field_value}>{patient.residentialAddress}</h4>
        </div>
        <div className={classes.details}>
          <h3 className={classes.field_name}>Next of Keen: </h3>
          <h4 className={classes.field_value}>
            {patient.keenFirstName} {patient.keenLastName}
          </h4>
        </div>
        <div className={classes.details}>
          <h3 className={classes.field_name}>
            Relationship with Next of Keen:{' '}
          </h3>
          <h4 className={classes.field_value}>{patient.keenRelationship}</h4>
        </div>
        <div className={classes.details}>
          <h3 className={classes.field_name}>Next of Keen Cell Number: </h3>
          <h4 className={classes.field_value}>{patient.keenPhoneNumber}</h4>
        </div>
        <div className={classes.details}>
          <h3 className={classes.field_name}>Medical Conditions: </h3>
          <h4 className={classes.field_value}>{patient.medicalConditions}</h4>
        </div>
        <div className={classes.details}>
          <h3 className={classes.field_name}>Allergies: </h3>
          <h4 className={classes.field_value}>{patient.allergies}</h4>
        </div>
        <div className={classes.details}>
          <h3 className={classes.field_name}>Disabilities: </h3>
          <h4 className={classes.field_value}>{patient.disability}</h4>
        </div>
        <div className={classes.details}>
          <h3 className={classes.field_name}>Family Medical History: </h3>
          <h4 className={classes.field_value}>
            {patient.familyMedicalHistory}
          </h4>
        </div>
        <div className={classes.details}>
          <h3 className={classes.field_name}>Surgical History: </h3>
          <h4 className={classes.field_value}>{patient.surgicalHistory}</h4>
        </div>
        <div className={classes.details}>
          <h3 className={classes.field_name}>Immunization Status: </h3>
          <h4 className={classes.field_value}>{patient.immunizationStatus}</h4>
        </div>
        <div className={classes.details}>
          <div className={classes.field_name}>Medical Aid Society: </div>
          <h4 className={classes.field_value}>{patient.medicalAidSociety}</h4>
        </div>
        <div className={classes.details}>
          <h3 className={classes.field_name}>Policy Holder Name: </h3>
          <h4 className={classes.field_value}>{patient.policyHolderName}</h4>
        </div>
        <div className={classes.details}>
          <h3 className={classes.field_name}>Policy Number: </h3>
          <h4 className={classes.field_value}>{patient.policyNumber}</h4>
        </div>
        <div className={classes.details}>
          <h3 className={classes.field_name}>Member Cell Number: </h3>
          <h4 className={classes.field_value}>{patient.memberContactNumber}</h4>
        </div>
      </div>
      <div className={classes.navigation_container}>
        <Link
          to={`/patient/medical-history/${patient._id}`}
          className={classes.redirect_link}
        >
          View Medical History
        </Link>
        <Link to={`/edit/${patient._id}`} className={classes.edit_link}>
          Edit Patient
        </Link>
        <button type="button" className={classes.delete_button}>
          Delete Patient
        </button>
      </div>
    </div>
  );
};

export default PatientDetails;
