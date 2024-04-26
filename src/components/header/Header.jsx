import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchPatient } from '../../redux/patientsSlice';
import { IoNotifications } from 'react-icons/io5';
import classes from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const patient = useSelector((state) => state.pat.searchResult);

  console.log(patient);
  // useEffect(() => {
  //   dispatch(fetchSinglePatient(idNumber));
  // }, [dispatch, idNumber]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Search term:', searchTerm);
    dispatch(searchPatient(searchTerm));
    setSearchTerm('');
  };

  return (
    <div className={classes.header}>
      <form className={classes.search_form} onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search Patient By ID e.g 22-778899A00"
          className={classes.search_input}
        />
        <button type="submit" className={classes.search_btn}>
          Search
        </button>
      </form>
      <button type="submit" className={classes.notification_btn}>
        <IoNotifications />
      </button>
    </div>
  );
};

export default Header;
