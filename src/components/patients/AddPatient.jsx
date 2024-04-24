import React, { useState } from 'react';
import classes from './AddPatience.module.css';

const AddPatientForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    idNumber: '',
    dateOfBirth: '',
    gender: '',
    phoneNumber: '',
    emailAddress: '',
    address: '',
    medicalConditions: '',
    allergies: '',
    disability: '',
    familyMedicalHistory: '',
    surgicalHistory: '',
    medications: '',
    immunizationStatus: '',
    medicalAidSociety: '',
    policyHolderName: '',
    policyNumber: '',
    memberContactNumber: '',
    keenFirstName: '',
    keenLastName: '',
    keenRelationship: '',
    keenPhoneNumber: '',
    additionalNotes: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.add_patient_form}>
      {/* Patient Details Input Forms */}
      <div className={classes.personal_details}>
        <h2 className={classes.form_section_heading}>Personal Details</h2>
        <div className={classes.personal_details_inputs}>
          <div className={classes.form_control}>
            <label className={classes.input_label}>First Name:</label>
            <input
              type="text"
              name="firstName"
              placeholder="John"
              value={formData.firstName}
              onChange={handleChange}
              className={classes.input_area}
            />
          </div>
          <div className={classes.form_control}>
            <label className={classes.input_label}>Last Name:</label>
            <input
              type="text"
              name="lastName"
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleChange}
              className={classes.input_area}
            />
          </div>
          <div className={classes.form_control}>
            <label className={classes.input_label}>ID Number:</label>
            <input
              type="text"
              name="idNumber"
              placeholder="22-778899A00"
              value={formData.idNumber}
              onChange={handleChange}
              className={classes.input_area}
            />
          </div>
          <div className={classes.form_control}>
            <label className={classes.input_label}>Date of Birth:</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className={classes.input_area}
            />
          </div>
          <div className={classes.form_control}>
            <label className={classes.input_label}>Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={classes.input_area}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className={classes.form_control}>
            <label className={classes.input_label}>Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="0778000111"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={classes.input_area}
            />
          </div>
          <div className={classes.form_control}>
            <label className={classes.input_label}>Email Address:</label>
            <input
              type="email"
              name="emailAddress"
              placeholder="johndoe@email.com"
              value={formData.emailAddress}
              onChange={handleChange}
              className={classes.input_area}
            />
          </div>
          <div className={classes.form_control}>
            <label className={classes.input_label}>Address:</label>
            <input
              type="address"
              name="address"
              placeholder="1 Med Street, Mabelreign, Harare"
              value={formData.address}
              onChange={handleChange}
              className={classes.input_area}
            />
          </div>
        </div>
      </div>
      {/* Next of Keen Input Forms */}
      <div className={classes.personal_details}>
        <h2 className={classes.form_section_heading}>Next of Keen Details</h2>
        <div className={classes.personal_details_inputs}>
          <div className={classes.form_control}>
            <label className={classes.input_label}>First Name:</label>
            <input
              type="text"
              name="keenFirstName"
              value={formData.keenFirstName}
              onChange={handleChange}
              className={classes.input_area}
            />
          </div>
          <div className={classes.form_control}>
            <label className={classes.input_label}>Last Name:</label>
            <input
              type="text"
              name="keenLastName"
              value={formData.keenLastName}
              onChange={handleChange}
              className={classes.input_area}
            />
          </div>
          <div className={classes.form_control}>
            <label className={classes.input_label}>Relationship:</label>
            <input
              type="text"
              name="keenRelationship"
              value={formData.keenRelationship}
              onChange={handleChange}
              className={classes.input_area}
            />
          </div>
          <div className={classes.form_control}>
            <label className={classes.input_label}>Phone Number:</label>
            <input
              type="tel"
              name="keenPhoneNumber"
              value={formData.keenPhoneNumber}
              onChange={handleChange}
              className={classes.input_area}
            />
          </div>
        </div>
      </div>
      {/* Healthy Details Input Forms */}
      <div className={classes.personal_details}>
        <h2 className={classes.form_section_heading}>Healthy Details</h2>
        <div className={classes.personal_details_inputs}>
          <div className={classes.form_control}>
            <label className={classes.input_label}>Medical Conditions:</label>
            <input
              type="text"
              name="medicalConditions"
              value={formData.medicalConditions}
              onChange={handleChange}
              className={classes.input_area}
            />
          </div>
          <div className={classes.form_control}>
            <label className={classes.input_label}>Allergies:</label>
            <input
              type="text"
              name="allergies"
              value={formData.allergies}
              onChange={handleChange}
              className={classes.input_area}
            />
          </div>
          <div className={classes.form_control}>
            <label className={classes.input_label}>Disabilities:</label>
            <input
              type="text"
              name="disability"
              value={formData.disability}
              onChange={handleChange}
              className={classes.input_area}
            />
          </div>
          <div className={classes.form_control}>
            <label className={classes.input_label}>
              Family Medical History:
            </label>
            <input
              type="text"
              name="familyMedicalHistory"
              value={formData.familyMedicalHistory}
              onChange={handleChange}
              className={classes.input_area}
            />
          </div>
          <div className={classes.form_control}>
            <label className={classes.input_label}>
              Past Surgeries/Medical Procedures:
            </label>
            <input
              type="text"
              name="surgicalHistory"
              value={formData.surgicalHistory}
              onChange={handleChange}
              className={classes.input_area}
            />
          </div>
          <div className={classes.form_control}>
            <label className={classes.input_label}>Immunization Status:</label>
            <input
              type="text"
              name="immunizationStatus"
              value={formData.immunizationStatus}
              onChange={handleChange}
              className={classes.input_area}
            />
          </div>
        </div>
      </div>
      {/* Policy Information Input Forms */}
      <div className={classes.personal_details}>
        <h2 className={classes.form_section_heading}>
          Medical Aid Information
        </h2>
        <div className={classes.personal_details_inputs}>
          <div className={classes.form_control}>
            <label className={classes.input_label}>Medical Aid Society:</label>
            <input
              type="text"
              name="insuranceProvider"
              value={formData.medicalAidSociety}
              onChange={handleChange}
              className={classes.input_area}
            />
          </div>
          <div className={classes.form_control}>
            <label className={classes.input_label}>Member's Name:</label>
            <input
              type="text"
              name="policyNumber"
              value={formData.policyHolderName}
              onChange={handleChange}
              className={classes.input_area}
            />
          </div>
          <div className={classes.form_control}>
            <label className={classes.input_label}>Policy Number:</label>
            <input
              type="text"
              name="policyNumber"
              value={formData.policyNumber}
              onChange={handleChange}
              className={classes.input_area}
            />
          </div>
          <div className={classes.form_control}>
            <label className={classes.input_label}>
              Member's Contact Number:
            </label>
            <input
              type="text"
              name="groupNumber"
              value={formData.groupNumber}
              onChange={handleChange}
              className={classes.input_area}
            />
          </div>
        </div>
      </div>
      <button type="submit" className={classes.submit_btn}>
        Submit
      </button>
    </form>
  );
};

export default AddPatientForm;
