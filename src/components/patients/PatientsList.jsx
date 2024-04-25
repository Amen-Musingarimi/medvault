import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPatients } from '../../redux/patientsSlice';

const PatientsList = () => {
  const dispatch = useDispatch();
  const patients = useSelector((state) => state.pat.patients);

  console.log(patients);

  useEffect(() => {
    dispatch(fetchPatients());
  }, [dispatch]);

  return (
    <div>
      <h2>Patients List</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            <strong>Name:</strong> {patient.patientFirstName}{' '}
            {patient.patientLastName} <br />
            <strong>ID Number:</strong> {patient.nationalId} <br />
            <strong>Phone Number:</strong> {patient.phoneNumber} <br />
            <strong>Gender:</strong> {patient.gender} <br />
            <strong>Age:</strong> {calculateAge(patient.dateOfBirth)} <br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

const calculateAge = (dateOfBirth) => {
  const dob = new Date(dateOfBirth);
  const ageDiffMs = Date.now() - dob.getTime();
  const ageDate = new Date(ageDiffMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

export default PatientsList;
