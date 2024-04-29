import React, { useState } from 'react';

import classes from './AssessPatient.module.css';

const PatientAssessmentForm = () => {
  const initialFormData = {
    temperature: '',
    bloodPressure: '',
    heartRate: '',
    respiratoryRate: '',
    currentSymptoms: '',
    diagnosis: '',
    prescribe: '',
    recommendedTests: '',
    checkupDate: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log(formData);
    // Dispatch action to create patient assessment
    // dispatch(createPatientAssessment(formData));
    // Reset form data
    setFormData(initialFormData);
  };

  return (
    <div className={classes.container}>
      <h1>Patient Assessment Form</h1>
      <form onSubmit={handleSubmit} className={classes.patient_assessment_form}>
        <div className={classes.personal_details}>
          <h2 className={classes.form_section_heading}>Assessment</h2>
          <div className={classes.personal_details_inputs}>
            <div className={classes.form_control}>
              <label className={classes.input_label}>Temperature:</label>
              <input
                type="text"
                name="temperature"
                placeholder="Enter temperature..."
                value={formData.temperature}
                onChange={handleChange}
                className={classes.input_area}
              />
            </div>
            <div className={classes.form_control}>
              <label className={classes.input_label}>Blood Pressure:</label>
              <input
                type="text"
                name="bloodPressure"
                placeholder="Enter blood pressure..."
                value={formData.bloodPressure}
                onChange={handleChange}
                className={classes.input_area}
              />
            </div>
            <div className={classes.form_control}>
              <label className={classes.input_label}>Heart Rate:</label>
              <input
                type="text"
                name="heartRate"
                placeholder="Enter heart rate..."
                value={formData.heartRate}
                onChange={handleChange}
                className={classes.input_area}
              />
            </div>
            <div className={classes.form_control}>
              <label className={classes.input_label}>Respiratory Rate:</label>
              <input
                type="text"
                name="respiratoryRate"
                placeholder="Enter respiratory rate..."
                value={formData.respiratoryRate}
                onChange={handleChange}
                className={classes.input_area}
              />
            </div>
            <div className={classes.form_control}>
              <label className={classes.input_label}>Current Symptoms:</label>
              <textarea
                name="currentSymptoms"
                placeholder="Describe current symptoms..."
                value={formData.currentSymptoms}
                onChange={handleChange}
                className={classes.input_area}
              />
            </div>
            <div className={classes.form_control}>
              <label className={classes.input_label}>Diagnosis:</label>
              <textarea
                name="diagnosis"
                placeholder="Enter diagnosis..."
                value={formData.diagnosis}
                onChange={handleChange}
                className={classes.input_area}
              />
            </div>
            <div className={classes.form_control}>
              <label className={classes.input_label}>Prescribe:</label>
              <textarea
                name="prescribe"
                placeholder="Enter prescribed medications..."
                value={formData.prescribe}
                onChange={handleChange}
                className={classes.input_area}
              />
            </div>
            <div className={classes.form_control}>
              <label className={classes.input_label}>Recommended Tests:</label>
              <textarea
                name="recommendedTests"
                placeholder="Enter recommended tests..."
                value={formData.recommendedTests}
                onChange={handleChange}
                className={classes.input_area}
              />
            </div>
            <div className={classes.form_control}>
              <label className={classes.input_label}>Schedule a Checkup:</label>
              <input
                type="datetime-local"
                name="checkupDate"
                value={formData.checkupDate}
                onChange={handleChange}
                className={classes.input_area}
              />
            </div>
          </div>
        </div>
        <button type="submit" className={classes.submit_btn}>
          Submit Assessment
        </button>
      </form>
    </div>
  );
};

export default PatientAssessmentForm;
