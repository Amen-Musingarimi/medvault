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
      <SearchPatientForm />
      <table className={classes.table}>
        <thead className={classes.thead}>
          <tr className={classes.table_header}>
            <th className={classes.table_header_col}>Id Number</th>
            <th className={classes.table_header_col}>First Name</th>
            <th className={classes.table_header_col}>Surname</th>
            <th className={classes.table_header_col}>Age</th>
            <th className={classes.table_header_col}>Gender</th>
            <th className={classes.table_header_col}>Action</th>
          </tr>
        </thead>
        <tbody className={classes.patients_list}>
          {patient ? (
            <SinglePatient patient={patient} />
          ) : (
            patients.map((patient) => <SinglePatient patient={patient} />)
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PatientsList;
