import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMedicalRecords } from '../../../redux/medicalRecords';
import { useParams } from 'react-router-dom';

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
    <div>
      <h4>List of Medical Records</h4>
    </div>
  );
};

export default MedicalRecordsList;
