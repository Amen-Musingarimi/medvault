import React from 'react';
import { Link } from 'react-router-dom';
import classes from './SinglePatient.module.css';

const SinglePatient = ({ patient }) => {
  const calculateAge = (dateOfBirth) => {
    const dob = new Date(dateOfBirth);
    const ageDiffMs = Date.now() - dob.getTime();
    const ageDate = new Date(ageDiffMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <tr key={patient._id} className={classes.table_body_row}>
      <td className={classes.table_body_col}>{patient.idNumber}</td>
      <td className={classes.table_body_col}>{patient.firstName}</td>
      <td className={classes.table_body_col}>{patient.lastName}</td>
      <td className={classes.table_body_col}>{patient.gender}</td>
      <td className={classes.table_body_col}>
        {calculateAge(patient.dateOfBirth)}
      </td>
      <td className={classes.table_body_col}>
        <Link to={`/patients/${patient._id}`} className={classes.view_btn}>
          View
        </Link>
      </td>
    </tr>
  );
};

export default SinglePatient;
