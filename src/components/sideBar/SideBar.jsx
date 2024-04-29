import React from 'react';
import classes from './SideBar.module.css';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { SlCalender } from 'react-icons/sl';
import { AiFillSchedule } from 'react-icons/ai';
import {
  FaUsers,
  FaUsersCog,
  FaUserCog,
  FaPills,
  FaStethoscope,
  FaFlask,
  FaFileAlt,
  FaNotesMedical,
} from 'react-icons/fa';
import { FcStatistics } from 'react-icons/fc';
import { BiSolidLogOut } from 'react-icons/bi';
import logo from '../../assets/madvault-logo.png';

const SideBar = () => {
  return (
    <nav className={classes.sideBarContainer}>
      <img src={logo} alt="logo" className={classes.logo} />
      <div className={classes.linksContainer}>
        <div className={classes.homeLinkCont}>
          <p className={classes.linkHeading}>HOME</p>
          <Link to="/overview" className={classes.homeLink}>
            <AiFillHome />
            <p className={classes.homeText}>Overview</p>
          </Link>
        </div>
        <div className={classes.homeLinkCont}>
          <p className={classes.linkHeading}>PATIENTS</p>
          <Link to="/patients" className={classes.homeLink}>
            <SlCalender />
            <p className={classes.homeText}>Patients List</p>
          </Link>
          <Link to="/add-patient" className={classes.homeLink}>
            <AiFillSchedule />
            <p className={classes.homeText}>Add Patient</p>
          </Link>
        </div>

        <div className={classes.homeLinkCont}>
          <p className={classes.linkHeading}>MEDICAL TASKS</p>
          <Link
            to="/medical-tasks/patient-assessment"
            className={classes.homeLink}
          >
            <FaNotesMedical />
            <p className={classes.homeText}>Assess Patient</p>
          </Link>
          <Link to="/prescribe-medication" className={classes.homeLink}>
            <FaPills />
            <p className={classes.homeText}>Prescribe Medication</p>
          </Link>
          <Link to="/create-treatment-plan" className={classes.homeLink}>
            <FaStethoscope />
            <p className={classes.homeText}>Create Treatment Plan</p>
          </Link>
          <Link to="/order-tests" className={classes.homeLink}>
            <FaFlask />
            <p className={classes.homeText}>Order Tests</p>
          </Link>
          <Link to="/generate-reports" className={classes.homeLink}>
            <FaFileAlt />
            <p className={classes.homeText}>Generate Reports</p>
          </Link>
        </div>

        <div className={classes.homeLinkCont}>
          <p className={classes.linkHeading}>APPOINTMENTS</p>
          <Link to="/set-availability" className={classes.homeLink}>
            <FaUsersCog />
            <p className={classes.homeText}>Office Hours</p>
          </Link>
          <Link to="/appointments" className={classes.homeLink}>
            <FaUsers />
            <p className={classes.homeText}>Appointments</p>
          </Link>
          <Link to="/schedule-appointment" className={classes.homeLink}>
            <FaUsersCog />
            <p className={classes.homeText}>Set Appointment</p>
          </Link>
        </div>
        <div className={classes.homeLinkCont}>
          <p className={classes.linkHeading}>YOUR PROFILE</p>
          <Link to="/profile/:id" className={classes.homeLink}>
            <FaUserCog />
            <p className={classes.homeText}>Details</p>
          </Link>
          <Link to="/settings" className={classes.homeLink}>
            <FcStatistics />
            <p className={classes.homeText}>Settings</p>
          </Link>
          <Link
            to="/logout"
            className={`${classes.homeLink} ${classes.danger}`}
          >
            <BiSolidLogOut />
            <p className={classes.homeText}>Logout</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
