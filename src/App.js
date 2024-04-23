import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SideBar from './components/sideBar/SideBar';
import Header from './components/header/Header';
import Authentication from './components/auth/Authentication';
import AddPatientForm from './components/patients/AddPatient';
import './App.css';

const App = () => {
  return (
    <div className="main-container">
      <SideBar />
      <div className="scrollable_main">
        <Header />
        <Routes>
          <Route exact path="/auth" element={<Authentication />} />
          <Route exact path="/add-patient" index element={<AddPatientForm />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
