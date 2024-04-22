import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import './SideBar.css';
import { FaFacebook, FaTwitter, FaPinterestP } from 'react-icons/fa';
import logo from '../../assets/medi_vault_logo.png';
import { toggleNav } from '../redux/sideBar/sideBarSlice';

const SideBar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.token !== null);

  const isOpen = useSelector((state) => state.nav.isOpen);

  const handleHideNav = () => {
    dispatch(toggleNav());
  };

  const navStyle = {
    zIndex: '95',
    position: 'fixed',
    left: '0',
    top: '0',
    display: 'grid',
    gridTemplateRows: '1fr 3.5fr 1fr',
    width: '36vw',
    height: '100vh',
    transform: isOpen ? 'none' : 'translateX(-37vw)',
    backgroundColor: 'white',
    borderRight: 'rgb(240, 240, 240) solid 1px',
    transition: 'all 1s',
  };

  return (
    <nav style={navStyle}>
      <div className="logo-box">
        <img src={logo} alt="app-logo" className="app-logo" />
      </div>
      <ul className="pages-link">
        <li>
          <NavLink to="/home" activeclassname="active">
            <button type="button" onClick={() => handleHideNav()}>
              HOTELS
            </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/reservations/my-reservations" activeclassname="active">
            <button type="button" onClick={() => handleHideNav()}>
              RESERVATIONS
            </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/reservations/new" activeclassname="active">
            <button type="button" onClick={() => handleHideNav()}>
              RESERVE A ROOM
            </button>
          </NavLink>
        </li>

        <>
          <li>
            <NavLink to="/hotel/new" activeclassname="active">
              <button type="button" onClick={() => handleHideNav()}>
                ADD HOTEL
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hotels"
              className="last-nav-link"
              activeclassname="active"
            >
              <button type="button" onClick={() => handleHideNav()}>
                DELETE HOTEL
              </button>
            </NavLink>
          </li>
        </>
      </ul>

      <section className="auth-wrapper">
        <ul className="auth-box">
          <>
            <li>
              <Link to="/auth" className="auth-link">
                <button
                  type="button"
                  onClick={() => {
                    handleHideNav();
                  }}
                >
                  Log In
                </button>
              </Link>
            </li>
            <li>
              <Link to="/auth" className="auth-link">
                <button
                  type="button"
                  onClick={() => {
                    handleHideNav();
                  }}
                >
                  Sign Up
                </button>
              </Link>
            </li>
          </>
          <li>
            <h4 className="username">Doc Amen Musinga</h4>
            <button
              type="button"
              className="down-btn"
              onClick={() => {
                handleHideNav();
              }}
            >
              Log Out
            </button>
          </li>
        </ul>
      </section>

      <div className="social-box">
        <FaPinterestP />
        <FaTwitter />
        <FaFacebook />
      </div>
    </nav>
  );
};

export default SideBar;
