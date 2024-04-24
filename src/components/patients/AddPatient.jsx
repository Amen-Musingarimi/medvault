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
    allergies: '',
    medicalConditions: '',
    familyMedicalHistory: '',
    surgicalHistory: '',
    medications: '',
    immunizations: '',
    insuranceProvider: '',
    policyNumber: '',
    groupNumber: '',
    primaryCarePhysician: '',
    emergencyContactName: '',
    emergencyContactRelationship: '',
    emergencyContactPhoneNumber: '',
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
      <div className={classes.personal_details}>
        <h2 className={classes.form_section_heading}>Next of Keen Details</h2>
        <div className={classes.personal_details_inputs}>
          <div className={classes.form_control}>
            <label className={classes.input_label}>Next of keen:</label>
            <input
              type="text"
              name="emergencyContactName"
              value={formData.emergencyContactName}
              onChange={handleChange}
            />
          </div>
          <label className={classes.input_label}>
            Relationship:
            <input
              type="text"
              name="emergencyContactRelationship"
              value={formData.emergencyContactRelationship}
              onChange={handleChange}
            />
          </label>
          <div className={classes.form_control}>
            <label className={classes.input_label}>Phone Number:</label>
            <input
              type="tel"
              name="emergencyContactPhoneNumber"
              value={formData.emergencyContactPhoneNumber}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className={classes.personal_details}>
        <h2 className={classes.form_section_heading}>Healthy Details</h2>
        <div className={classes.personal_details_inputs}>
          <label className={classes.input_label}>
            Allergies:
            <input
              type="text"
              name="allergies"
              value={formData.allergies}
              onChange={handleChange}
            />
          </label>

          <label className={classes.input_label}>
            Medical Conditions:
            <input
              type="text"
              name="medicalConditions"
              value={formData.medicalConditions}
              onChange={handleChange}
            />
          </label>

          <label className={classes.input_label}>
            Family Medical History:
            <input
              type="text"
              name="familyMedicalHistory"
              value={formData.familyMedicalHistory}
              onChange={handleChange}
            />
          </label>

          <label className={classes.input_label}>
            Surgical History:
            <input
              type="text"
              name="surgicalHistory"
              value={formData.surgicalHistory}
              onChange={handleChange}
            />
          </label>

          <label className={classes.input_label}>
            Medications:
            <input
              type="text"
              name="medications"
              value={formData.medications}
              onChange={handleChange}
            />
          </label>

          <label className={classes.input_label}>
            Immunizations:
            <input
              type="text"
              name="immunizations"
              value={formData.immunizations}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
      <div className={classes.personal_details}>
        <h2 className={classes.form_section_heading}>Policy Information</h2>
        <div className={classes.personal_details_inputs}>
          <label>
            Insurance Provider:
            <input
              type="text"
              name="insuranceProvider"
              value={formData.insuranceProvider}
              onChange={handleChange}
            />
          </label>

          <label>
            Policy Number:
            <input
              type="text"
              name="policyNumber"
              value={formData.policyNumber}
              onChange={handleChange}
            />
          </label>

          <label>
            Group Number:
            <input
              type="text"
              name="groupNumber"
              value={formData.groupNumber}
              onChange={handleChange}
            />
          </label>

          <label>
            Primary Care Physician:
            <input
              type="text"
              name="primaryCarePhysician"
              value={formData.primaryCarePhysician}
              onChange={handleChange}
            />
          </label>
          <label>
            Additional Notes:
            <textarea
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddPatientForm;
