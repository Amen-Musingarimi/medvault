import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchPatient } from '../../redux/patientsSlice';
import classes from './SearchPatientForm.module.css';

const SearchPatientForm = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const patient = useSelector((state) => state.pat.searchResult);

  console.log(patient);

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
    </div>
  );
};

export default SearchPatientForm;
