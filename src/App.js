import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SideBar from './components/sideBar/SideBar';
import Authentication from './components/auth/Authentication';
import './App.css';

const App = () => {
  return (
    <div className="main-container">
      <SideBar />
      <Routes>
        <Route exact path="/auth" element={<Authentication />} />
      </Routes>
    </div>
  );
};

export default App;
