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
                <h3 className={classes.field_name}>Name: </h3>
                <h4 className={classes.field_value}>
                  {patient.firstName} {patient.lastName}
                </h4>
              </div>
              <div className={classes.values_container}>
                <h3 className={classes.field_name}>ID Number: </h3>
                <h4 className={classes.field_value}>{patient.idNumber}</h4>
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
