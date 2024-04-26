import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPatients, clearSearchResult } from '../../redux/patientsSlice';
import SinglePatient from './SinglePatient';
import SearchPatientForm from '../SearchPatientForm/SearchPatientForm';
import classes from './PatientsList.module.css';

const PatientsList = () => {
  const dispatch = useDispatch();
  const patients = useSelector((state) => state.pat.patients);
  const { patient } = useSelector((state) => state.pat.searchResult);

  useEffect(() => {
    dispatch(fetchPatients());
    return () => {
      dispatch(clearSearchResult());
    };
  }, [dispatch]);

  // const isEmpty = Object.keys(patient).length === 0;

  return (
    <div className={classes.patients_list_container}>
      <h2 className={classes.section_heading}>Patients List</h2>
      <SearchPatientForm />
      <ul className={classes.patients_list}>
        {patient ? (
          <li key={patient._id} className={classes.list_item}>
            <SinglePatient patient={patient} />
          </li>
        ) : (
          patients.map((patient) => (
            <li key={patient._id} className={classes.list_item}>
              <SinglePatient patient={patient} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default PatientsList;
