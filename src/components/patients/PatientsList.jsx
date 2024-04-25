import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPatients } from '../../redux/patientsSlice';
import SinglePatient from './SinglePatient';
import classes from './PatientsList.module.css';

const PatientsList = () => {
  const dispatch = useDispatch();
  const patients = useSelector((state) => state.pat.patients);

  useEffect(() => {
    dispatch(fetchPatients());
  }, [dispatch]);

  return (
    <div className={classes.patients_list_container}>
      <h2 className={classes.section_heading}>Patients List</h2>
      <ul className={classes.patients_list}>
        {patients.map((patient) => (
          <li key={patient._id} className={classes.list_item}>
            <SinglePatient patient={patient} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientsList;
