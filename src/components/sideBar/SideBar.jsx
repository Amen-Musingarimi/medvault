import React from 'react';
import classes from './SideBar.module.css';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { SlCalender } from 'react-icons/sl';
import { AiFillSchedule } from 'react-icons/ai';
import { FaUsers, FaUsersCog, FaUserCog } from 'react-icons/fa';
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
          <Link className={classes.homeLink}>
            <AiFillHome />
            <p className={classes.homeText}>Overview</p>
          </Link>
        </div>
        <div className={classes.homeLinkCont}>
          <p className={classes.linkHeading}>PATIENTS</p>
          <Link className={classes.homeLink}>
            <SlCalender />
            <p className={classes.homeText}>Manage Patience</p>
          </Link>
          <Link className={classes.homeLink}>
            <AiFillSchedule />
            <p className={classes.homeText}>Add Patient</p>
          </Link>
        </div>
        <div className={classes.homeLinkCont}>
          <p className={classes.linkHeading}>APPOINTMENTS</p>
          <Link className={classes.homeLink}>
            <FaUsersCog />
            <p className={classes.homeText}>Set Availability</p>
          </Link>
          <Link className={classes.homeLink}>
            <FaUsers />
            <p className={classes.homeText}>Upcoming Appointments</p>
          </Link>
          <Link className={classes.homeLink}>
            <FaUsersCog />
            <p className={classes.homeText}>Schedule Appointment</p>
          </Link>
        </div>
        <div className={classes.homeLinkCont}>
          <p className={classes.linkHeading}>YOUR PROFILE</p>
          <Link className={classes.homeLink}>
            <FaUserCog />
            <p className={classes.homeText}>Details</p>
          </Link>
          <Link className={classes.homeLink}>
            <FcStatistics />
            <p className={classes.homeText}>Settings</p>
          </Link>
          <Link className={`${classes.homeLink} ${classes.danger}`}>
            <BiSolidLogOut />
            <p className={classes.homeText}>Logout</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
