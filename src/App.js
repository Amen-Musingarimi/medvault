import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SideBar from './components/sideBar/SideBar';
import Header from './components/header/Header';
import Authentication from './components/auth/Authentication';
import AddPatientForm from './components/patients/AddPatient';
import PatientsList from './components/patients/PatientsList';
import PatientDetails from './components/patients/PatientDetails/PatientDetails';
import PatientAssessmentForm from './components/medicalTasks/AssessPatient';
import MedicalRecordsList from './components/medicalTasks/MedicalRecords/MedicalRecordsList';
import './App.css';

const App = () => {
  return (
    <div className="main-container">
      <SideBar />
      <div className="scrollable_main">
        <Header />
        <Routes>
          <Route exact path="/auth" element={<Authentication />} />
          <Route exact path="/patients" index element={<PatientsList />} />
          <Route exact path="/add-patient" index element={<AddPatientForm />} />
          <Route
            exact
            path="/medical-tasks/patient-assessment"
            index
            element={<PatientAssessmentForm />}
          />
          <Route
            exact
            path="/patients/:id"
            index
            element={<PatientDetails />}
          />
          <Route
            exact
            path="/patient/medical-history/:id"
            index
            element={<MedicalRecordsList />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
