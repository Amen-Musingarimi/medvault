import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoNotifications } from 'react-icons/io5';
import classes from './Header.module.css';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // You can perform your search logic here with the searchTerm state
    console.log('Search term:', searchTerm);
  };

  return (
    <div className={classes.header}>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search Patient By ID e.g 22-778899A00"
          className={classes.search_form}
        />
        <button type="submit" className={classes.search_btn}>
          Search
        </button>
      </form>
      <button type="submit">
        <IoNotifications />
      </button>
    </div>
  );
};

export default Header;
