import React from 'react';
import classes from './SideBar.module.css';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { SlCalender } from 'react-icons/sl';
import {
  BsFillTrophyFill,
  BsFileEarmarkCheckFill,
  BsFillCalendarDateFill,
} from 'react-icons/bs';
import { AiFillSchedule, AiFillQuestionCircle } from 'react-icons/ai';
import { FaUsers, FaUsersCog, FaUserCog } from 'react-icons/fa';
import { FcInvite } from 'react-icons/fc';
import { MdAnnouncement, MdReportProblem } from 'react-icons/md';
import { FcStatistics } from 'react-icons/fc';
import { TbAdjustmentsCheck } from 'react-icons/tb';
import { BiSolidLogOut } from 'react-icons/bi';

const SideBar = () => {
  return (
    <nav className={classes.sideBarContainer}>
      <h3 className={classes.logo}>CPL</h3>
      <div className={classes.linksContainer}>
        <div className={classes.homeLinkCont}>
          <p className={classes.linkHeading}>HOME</p>
          <Link className={classes.homeLink}>
            <AiFillHome />
            <p className={classes.homeText}>Overview</p>
          </Link>
        </div>
        <div className={classes.homeLinkCont}>
          <p className={classes.linkHeading}>MATCHES</p>
          <Link className={classes.homeLink}>
            <SlCalender />
            <p className={classes.homeText}>Fixtures</p>
          </Link>
          <Link className={classes.homeLink}>
            <AiFillSchedule />
            <p className={classes.homeText}>Results</p>
          </Link>
          <Link className={classes.homeLink}>
            <BsFillTrophyFill />
            <p className={classes.homeText}>Standings</p>
          </Link>
        </div>
        <div className={classes.homeLinkCont}>
          <p className={classes.linkHeading}>CLUBS</p>
          <Link className={classes.homeLink}>
            <FaUsers />
            <p className={classes.homeText}>Teams</p>
          </Link>
          <Link className={classes.homeLink}>
            <FaUsersCog />
            <p className={classes.homeText}>Team Sheets</p>
          </Link>
        </div>
        <div className={classes.homeLinkCont}>
          <p className={classes.linkHeading}>GET HELP</p>
          <Link className={classes.homeLink}>
            <AiFillQuestionCircle />
            <p className={classes.homeText}>FAQS</p>
          </Link>
          <Link className={classes.homeLink}>
            <MdAnnouncement />
            <p className={classes.homeText}>Anouncements</p>
          </Link>
          <Link className={classes.homeLink}>
            <MdReportProblem />
            <p className={classes.homeText}>Report Misconduct</p>
          </Link>
        </div>
        <div className={classes.homeLinkCont}>
          <p className={classes.linkHeading}>TEAM ADMIN</p>
          <Link className={classes.homeLink}>
            <BsFileEarmarkCheckFill />
            <p className={classes.homeText}>Submit Team Sheet</p>
          </Link>
          <Link className={classes.homeLink}>
            <FcInvite />
            <p className={classes.homeText}>Invite Team Members</p>
          </Link>
          <Link className={classes.homeLink}>
            <FaUsersCog />
            <p className={classes.homeText}>Manage Team</p>
          </Link>
          <Link className={classes.homeLink}>
            <TbAdjustmentsCheck />
            <p className={classes.homeText}>Manage Fixtures</p>
          </Link>
        </div>
        <div className={classes.homeLinkCont}>
          <p className={classes.linkHeading}>LEAGUE ADMIN</p>
          <Link className={classes.homeLink}>
            <BsFileEarmarkCheckFill />
            <p className={classes.homeText}>Approve Team Sheet</p>
          </Link>
          <Link className={classes.homeLink}>
            <FcInvite />
            <p className={classes.homeText}>Invite Team Captains</p>
          </Link>
          <Link className={classes.homeLink}>
            <BsFillCalendarDateFill />
            <p className={classes.homeText}>Manage Dates</p>
          </Link>
          <Link className={classes.homeLink}>
            <FaUsersCog />
            <p className={classes.homeText}>Manage Users</p>
          </Link>
          <Link className={classes.homeLink}>
            <TbAdjustmentsCheck />
            <p className={classes.homeText}>Manage Fixtures</p>
          </Link>
        </div>
        <div className={classes.homeLinkCont}>
          <p className={classes.linkHeading}>SYSTEM ADMIN</p>
          <Link className={classes.homeLink}>
            <FcInvite />
            <p className={classes.homeText}>Invite League Admins</p>
          </Link>
          <Link className={classes.homeLink}>
            <FaUsersCog />
            <p className={classes.homeText}>Manage Teams</p>
          </Link>
          <Link className={classes.homeLink}>
            <FaUsersCog />
            <p className={classes.homeText}>Manage Users</p>
          </Link>
        </div>
        <div className={classes.homeLinkCont}>
          <p className={classes.linkHeading}>YOUR ACOUNT</p>
          <Link className={classes.homeLink}>
            <FaUserCog />
            <p className={classes.homeText}>Account Details</p>
          </Link>
          <Link className={classes.homeLink}>
            <FcStatistics />
            <p className={classes.homeText}>Game Statistics</p>
          </Link>
          <Link className={classes.homeLink}>
            <BiSolidLogOut />
            <p className={classes.homeText}>Logout</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
