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
      <div className={classes.patient_data}>
        <h2 className={classes.section_heading}>
          <span className={classes.patient_name}>{patient.firstName}'s</span>{' '}
          Details
        </h2>
        <div className={classes.details_wrapper}>
          <h3 className={classes.details_heading}>Personal Details</h3>
          <div className={classes.patient_details}>
            <div className={classes.details_section}>
              <div className={classes.values_container}>
                <h3 className={classes.field_name}>First Name: </h3>
                <h4 className={classes.field_value}>{patient.firstName}</h4>
              </div>
              <div className={classes.values_container}>
                <h3 className={classes.field_name}>Last Name: </h3>
                <h4 className={classes.field_value}>{patient.lastName}</h4>
              </div>
            </div>
            <div className={classes.details_section}>
              <div className={classes.values_container}>
                <h3 className={classes.field_name}>Id Number: </h3>
                <h4 className={classes.field_value}>{patient.idNumber}</h4>
              </div>
              <div className={classes.values_container}>
                <h3 className={classes.field_name}>Gender: </h3>
                <h4 className={classes.field_value}>
                  {capitaliseFirstLetter(patient.gender)}
                </h4>
              </div>
            </div>
            <div className={classes.details_section}>
              <div className={classes.values_container}>
                <h3 className={classes.field_name}>Cell Number: </h3>
                <h4 className={classes.field_value}>{patient.phoneNumber}</h4>
              </div>
              <div className={classes.values_container}>
                <h3 className={classes.field_name}>Date of Birth: </h3>
                <h4 className={classes.field_value}>
                  {patient.dateOfBirth}({calculateAge(patient.dateOfBirth)}
                  years)
                </h4>
              </div>
            </div>
            <div className={classes.details_section}>
              <div className={classes.values_container}>
                <h3 className={classes.field_name}>Email Address: </h3>
                <h4 className={classes.field_value}>{patient.emailAddress}</h4>
              </div>
              <div className={classes.values_container}>
                <h3 className={classes.field_name}>Residential Address: </h3>
                <h4 className={classes.field_value}>
                  {patient.residentialAddress}
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.details_wrapper}>
          <h3 className={classes.details_heading}>Details of Next of Keen</h3>
          <div className={classes.patient_details}>
            <div className={classes.details_section}>
              <div className={classes.values_container}>
                <h3 className={classes.field_name}>First Name: </h3>
                <h4 className={classes.field_value}>{patient.keenFirstName}</h4>
              </div>
              <div className={classes.values_container}>
                <h3 className={classes.field_name}>Last Name: </h3>
                <h4 className={classes.field_value}>{patient.keenLastName}</h4>
              </div>
            </div>
            <div className={classes.details_section}>
              <div className={classes.values_container}>
                <h3 className={classes.field_name}>Relationship: </h3>
                <h4 className={classes.field_value}>
                  {patient.keenRelationship}
                </h4>
              </div>
              <div className={classes.values_container}>
                <h3 className={classes.field_name}>Cell Number: </h3>
                <h4 className={classes.field_value}>
                  {capitaliseFirstLetter(patient.keenPhoneNumber)}
                </h4>
              </div>
            </div>
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
    </div>
  );
};

export default PatientDetails;
