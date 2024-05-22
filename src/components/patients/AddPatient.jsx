import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPatient } from '../../redux/patientsSlice';
import classes from './AddPatient.module.css';

const AddPatientForm = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.pat.error);
  const status = useSelector((state) => state.pat.status);
  console.log(error, status);

  const initialFormData = {
    firstName: '',
    lastName: '',
    idNumber: '',
    dateOfBirth: '',
    gender: '',
    phoneNumber: '',
    emailAddress: '',
    residentialAddress: '',
    keenFirstName: '',
    keenLastName: '',
    keenRelationship: '',
    keenPhoneNumber: '',
    medicalConditions: '',
    allergies: '',
    disability: '',
    familyMedicalHistory: '',
    surgicalHistory: '',
    immunizationStatus: '',
    medicalAidSociety: '',
    policyHolderName: '',
    policyNumber: '',
    memberContactNumber: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formError, setFormError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(createPatient(formData));
    if (status === 'failed') {
      setFormError(error);
    }
    setFormData(initialFormData);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.add_patient_form}>
      {/* Patient Details Input Forms */}
      <div className={classes.personal_details}>
        <h2 className={classes.form_section_heading}>Personal Details</h2>
        <div className={classes.personal_details_inputs}>
          <div className={classes.form_control}>
            <label className={classes.input_label}>
              First Name: <span className={classes.required_sign}>*</span>
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="John"
              value={formData.firstName}
              minLength={4}
              onChange={handleChange}
              className={classes.input_area}
              required
            />
          </div>
          <div className={classes.form_control}>
            <label className={classes.input_label}>
              Last Name: <span className={classes.required_sign}>*</span>
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Doe"
              value={formData.lastName}
              minLength={4}
              onChange={handleChange}
              required
              className={classes.input_area}
            />
          </div>
          <div className={classes.form_control}>
            <label className={classes.input_label}>
              ID Number: <span className={classes.required_sign}>*</span>
            </label>
            <input
              type="text"
              name="idNumber"
              placeholder="22-778899A00"
              value={formData.idNumber}
              pattern=".{12}"
              title="National ID must be exactly 10 characters long."
              onChange={handleChange}
              required
              className={classes.input_area}
            />
          </div>
          <div className={classes.form_control}>
            <label className={classes.input_label}>
              Date of Birth: <span className={classes.required_sign}>*</span>
            </label>
            <input
              type="date"
              name="dateOfBirth"
              required
              value={formData.dateOfBirth}
              onChange={handleChange}
              className={classes.input_area}
            />
          </div>
          <div className={classes.form_control}>
            <label className={classes.input_label}>
              Gender: <span className={classes.required_sign}>*</span>
            </label>
            <select
              name="gender"
              value={formData.gender}
              required
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
            <label className={classes.input_label}>
              Phone Number: <span className={classes.required_sign}>*</span>
            </label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="0778000111"
              minLength={10}
              required
              value={formData.phoneNumber}
              onChange={handleChange}
              className={classes.input_area}
            />
          </div>
          <div className={classes.form_control}>
            <label className={classes.input_label}>
              Email Address:{' '}
              <span className={classes.optional_message}>[optional]</span>
            </label>
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
            <label className={classes.input_label}>
              Residential Address:{' '}
              <span className={classes.required_sign}>*</span>
            </label>
            <input
              type="address"
              name="residentialAddress"
              placeholder="1 Med Street, Mabelreign, Harare"
              required
              value={formData.residentialAddress}
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
            <label className={classes.input_label}>
              First Name: <span className={classes.required_sign}>*</span>
            </label>
            <input
              type="text"
              name="keenFirstName"
              placeholder="Jammy"
              minLength={3}
              required
              value={formData.keenFirstName}
              onChange={handleChange}
              className={classes.input_area}
            />
          </div>
          <div className={classes.form_control}>
            <label className={classes.input_label}>
              Last Name: <span className={classes.required_sign}>*</span>
            </label>
            <input
              type="text"
              name="keenLastName"
              placeholder="Jodol"
              minLength={3}
              required
              value={formData.keenLastName}
              onChange={handleChange}
              className={classes.input_area}
            />
          </div>
          <div className={classes.form_control}>
            <label className={classes.input_label}>
              Relationship: <span className={classes.required_sign}>*</span>
            </label>
            <input
              type="text"
              name="keenRelationship"
              required
              minLength={4}
              value={formData.keenRelationship}
              placeholder="Husband"
              onChange={handleChange}
              className={classes.input_area}
            />
          </div>
          <div className={classes.form_control}>
            <label className={classes.input_label}>
              Phone Number: <span className={classes.required_sign}>*</span>
            </label>
            <input
              type="tel"
              name="keenPhoneNumber"
              placeholder="0778000111"
              minLength={10}
              required
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
            <label className={classes.input_label}>
              Medical Conditions:{' '}
              <span className={classes.optional_message}>[optional]</span>
            </label>
            <input
              type="text"
              name="medicalConditions"
              placeholder="Diabetes, Asthma"
              minLength={4}
              value={formData.medicalConditions}
              onChange={handleChange}
              className={classes.input_area}
            />
          </div>
          <div className={classes.form_control}>
            <label className={classes.input_label}>
              Allergies:{' '}
              <span className={classes.optional_message}>[optional]</span>
            </label>
            <input
              type="text"
              name="allergies"
              placeholder="Penicillin, Pollen"
              minLength={4}
              value={formData.allergies}
              onChange={handleChange}
              className={classes.input_area}
            />
          </div>
          <div className={classes.form_control}>
            <label className={classes.input_label}>
              Disabilities:{' '}
              <span className={classes.optional_message}>[optional]</span>
            </label>
            <input
              type="text"
              name="disability"
              placeholder="Blind, Deaf"
              minLength={4}
              value={formData.disability}
              onChange={handleChange}
              className={classes.input_area}
            />
          </div>
          <div className={classes.form_control}>
            <label className={classes.input_label}>
              Family Medical History:{' '}
              <span className={classes.optional_message}>[optional]</span>
            </label>
            <input
              type="text"
              name="familyMedicalHistory"
              placeholder="Diabetes"
              minLength={4}
              value={formData.familyMedicalHistory}
              onChange={handleChange}
              className={classes.input_area}
            />
          </div>
          <div className={classes.form_control}>
            <label className={classes.input_label}>
              Past Medical Procedures:{' '}
              <span className={classes.optional_message}>[optional]</span>
            </label>
            <input
              type="text"
              name="surgicalHistory"
              placeholder="C-Section"
              minLength={4}
              value={formData.surgicalHistory}
              onChange={handleChange}
              className={classes.input_area}
            />
          </div>
          <div className={classes.form_control}>
            <label className={classes.input_label}>
              Immunization Status:{' '}
              <span className={classes.required_sign}>*</span>
            </label>
            <input
              type="text"
              name="immunizationStatus"
              placeholder="All except Polio"
              minLength={3}
              required
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
            <label className={classes.input_label}>
              Medical Aid Society:{' '}
              <span className={classes.optional_message}>[optional]</span>
            </label>
            <input
              type="text"
              name="medicalAidSociety"
              placeholder="CIMAS"
              minLength={4}
              value={formData.medicalAidSociety}
              onChange={handleChange}
              className={classes.input_area}
            />
          </div>
          <div className={classes.form_control}>
            <label className={classes.input_label}>
              Member's Name:{' '}
              <span className={classes.optional_message}>[optional]</span>
            </label>
            <input
              type="text"
              name="policyHolderName"
              placeholder="John Doe"
              minLength={4}
              value={formData.policyHolderName}
              onChange={handleChange}
              className={classes.input_area}
            />
          </div>
          <div className={classes.form_control}>
            <label className={classes.input_label}>
              Policy Number:{' '}
              <span className={classes.optional_message}>[optional]</span>
            </label>
            <input
              type="text"
              name="policyNumber"
              placeholder="01020304"
              minLength={4}
              value={formData.policyNumber}
              onChange={handleChange}
              className={classes.input_area}
            />
          </div>
          <div className={classes.form_control}>
            <label className={classes.input_label}>
              Member's Contact Number:{' '}
              <span className={classes.optional_message}>[optional]</span>
            </label>
            <input
              type="text"
              name="memberContactNumber"
              placeholder="0778000111"
              minLength={10}
              value={formData.memberContactNumber}
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
