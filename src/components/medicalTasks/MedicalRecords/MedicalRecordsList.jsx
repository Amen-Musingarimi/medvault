import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMedicalRecords } from '../../../redux/medicalRecords';
import { useParams } from 'react-router-dom';
import MedicalRecordsListItem from './MedicalRecordsListItem';
import classes from './MedicalRecordsList.module.css';

const MedicalRecordsList = () => {
  const dispatch = useDispatch();
  const medicalRecords = useSelector(
    (state) => state.medicalRecords.patientMedicalRecords
  );

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchMedicalRecords(id));
  }, [dispatch, id]);

  console.log(id);
  console.log(medicalRecords);

  return (
    <ul className={classes.medical_records_list_container}>
      <h2 className={classes.section_heading}>List of Medical Records</h2>
      {medicalRecords.map((medicalRecord) => (
        <li key={medicalRecord._id}>
          <MedicalRecordsListItem medicalRecord={medicalRecord} />
        </li>
      ))}
    </ul>
  );
};

export default MedicalRecordsList;
