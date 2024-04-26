import React from 'react';
import { IoNotifications } from 'react-icons/io5';
import doctorAvatar from '../../assets/doctor-avatar.webp';
import classes from './Header.module.css';

const Header = () => {
  const doctorName = 'Amen Musingarimi';
  const doctorSpeciality = 'Pysician';
  const remainingAvailabilityHours = 4;
  return (
    <div className={classes.header}>
      <div className={classes.doctor_details}>
        <div className={classes.name_image_cont}>
          <img
            src={doctorAvatar}
            alt="doctor avatar"
            className={classes.doctor_avatar}
          />
          <h2 className={classes.doctor_names}>Dr {doctorName}</h2>
        </div>
        <div className={classes.name_icon_cont}>
          <h2 className={classes.doctor_names}>{doctorSpeciality}</h2>
          <span className={classes.heading}>Speciality</span>
        </div>
        <div className={classes.name_icon_cont}>
          <h2 className={classes.doctor_names}>{remainingAvailabilityHours}</h2>
          <span className={classes.heading}>Remaining Hours</span>
        </div>
      </div>
      <div className={classes.name_icon_cont}>
        <button type="submit" className={classes.notification_btn}>
          <IoNotifications />
        </button>
        <span className={classes.heading}>Notifications</span>
      </div>
    </div>
  );
};

export default Header;
