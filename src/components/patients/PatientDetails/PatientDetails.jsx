import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSinglePatient } from '../../../redux/patientsSlice';
import { useParams } from 'react-router-dom';

const PatientDetails = () => {
  const dispatch = useDispatch();
  const patient = useSelector((state) => state.pat.patient);
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    dispatch(fetchSinglePatient(id));
  }, [dispatch, id]);

  const calculateAge = (dateOfBirth) => {
    const dob = new Date(dateOfBirth);
    const ageDiffMs = Date.now() - dob.getTime();
    const ageDate = new Date(ageDiffMs); // milliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <div>
      <h2>Patient Details</h2>
      <div>
        <strong>Name:</strong> {patient.firstName} {patient.lastName}
      </div>
      <div>
        <strong>ID Number:</strong> {patient.idNumber}
      </div>
      <div>
        <strong>Date of Birth:</strong> {patient.dateOfBirth}
      </div>
      <div>
        <strong>Gender:</strong> {patient.gender}
      </div>
      <div>
        <strong>Phone Number:</strong> {patient.phoneNumber}
      </div>
      <div>
        <strong>Email Address:</strong> {patient.emailAddress}
      </div>
      <div>
        <strong>Residential Address:</strong> {patient.residentialAddress}
      </div>
      <div>
        <strong>Keen Name:</strong> {patient.keenFirstName}{' '}
        {patient.keenLastName}
      </div>
      <div>
        <strong>Keen Relationship:</strong> {patient.keenRelationship}
      </div>
      <div>
        <strong>Keen Phone Number:</strong> {patient.keenPhoneNumber}
      </div>
      <div>
        <strong>Medical Conditions:</strong> {patient.medicalConditions}
      </div>
      <div>
        <strong>Allergies:</strong> {patient.allergies}
      </div>
      <div>
        <strong>Disability:</strong> {patient.disability}
      </div>
      <div>
        <strong>Family Medical History:</strong> {patient.familyMedicalHistory}
      </div>
      <div>
        <strong>Surgical History:</strong> {patient.surgicalHistory}
      </div>
      <div>
        <strong>Immunization Status:</strong> {patient.immunizationStatus}
      </div>
      <div>
        <strong>Medical Aid Society:</strong> {patient.medicalAidSociety}
      </div>
      <div>
        <strong>Policy Holder Name:</strong> {patient.policyHolderName}
      </div>
      <div>
        <strong>Policy Number:</strong> {patient.policyNumber}
      </div>
      <div>
        <strong>Member Contact Number:</strong> {patient.memberContactNumber}
      </div>
    </div>
  );
};

export default PatientDetails;
