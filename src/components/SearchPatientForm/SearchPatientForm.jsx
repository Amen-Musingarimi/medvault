import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchPatient, clearSearchResult } from '../../redux/patientsSlice';
import classes from './SearchPatientForm.module.css';

const SearchPatientForm = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const { message } = useSelector((state) => state.pat.searchResult);
  const error = useSelector((state) => state.pat.error);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    dispatch(clearSearchResult());
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    dispatch(searchPatient(searchTerm));
    setSearchTerm('');
  };

  let uiMessage;
  if (error) {
    uiMessage = error;
  } else {
    uiMessage = message;
  }

  return (
    <div>
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
      <div className={classes.message_container}>
        <p className={classes.ui_message}>{uiMessage}</p>
      </div>
    </div>
  );
};

export default SearchPatientForm;
