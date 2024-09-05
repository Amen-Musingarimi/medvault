import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../../redux/authenticationSlice';
import classes from './SignUp.modules.css';

const DoctorSignup = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const status = useSelector((state) => state.auth.status);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
    gender: '',
    phoneNumber: '',
    specialization: '',
    medicalLicenseNumber: '',
    hospital: '',
  });
  const [formError, setFormError] = useState(null);

  const specializations = [
    'General Practitioner',
    'Physician',
    'Dentist',
    'Pediatrician',
    'Gynecologist',
    'Cardiologist',
    'Dermatologist',
    'Orthopedic Surgeon',
    'Neurologist',
    'Psychiatrist',
    'Ophthalmologist',
    'Otolaryngologist',
    'Urologist',
    'Endocrinologist',
    'Gastroenterologist',
    'Pulmonologist',
  ];

  useEffect(() => {
    if (status === 'failed') {
      setFormError(error);
    } else if (status === 'succeeded') {
      setFormData({
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: '',
        confirmPassword: '',
        gender: '',
        phoneNumber: '',
        specialization: '',
        medicalLicenseNumber: '',
        hospital: '',
      });
      setFormError(null);
    }
  }, [status, error]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
    console.log(formData);
  };

  return (
    <div className="signup-page flex-column">
      <h1>Doctor Signup</h1>
      <form onSubmit={handleSubmit} className="signup-form flex-column">
        <div className="form-sections">
          {formError && (
            <div className={classes.error_message}>{formError}</div>
          )}
          <div className="form-control">
            <label className="form-label">First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              min={3}
            />
            <p className={classes.errorMessage}></p>
          </div>
          <div className="form-control">
            <label className="form-label">Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              min={3}
            />
            <p className={classes.errorMessage}></p>
          </div>

          <div className="form-control">
            <label className="form-label">Email Address:</label>
            <input
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
            />
            <p className={classes.errorMessage}></p>
          </div>
          <div className="form-control">
            <label className="form-label">Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <p className={classes.errorMessage}></p>
          </div>
          <div className="form-control">
            <label className="form-label">Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              min={10}
            />
            <p className={classes.errorMessage}></p>
          </div>
          <div className="form-control">
            <label className="form-label">Specialization:</label>

            <select
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
            >
              <option value="">Select Specialization</option>
              {specializations.map((specialization) => (
                <option value={specialization} key={specialization}>
                  {specialization}
                </option>
              ))}
            </select>
            <p className={classes.errorMessage}></p>
          </div>
          <div className="form-control">
            <label className="form-label">Medical License Number:</label>
            <input
              type="text"
              name="medicalLicenseNumber"
              value={formData.medicalLicenseNumber}
              onChange={handleChange}
            />
            <p className={classes.errorMessage}></p>
          </div>
          <div className="form-control">
            <label className="form-label">Hospital:</label>
            <input
              type="text"
              name="hospital"
              value={formData.hospital}
              onChange={handleChange}
            />
            <p className={classes.errorMessage}></p>
          </div>
          <div className="form-control">
            <label className="form-label">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <p className={classes.errorMessage}></p>
          </div>
          <div className="form-control">
            <label className="form-label">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default DoctorSignup;
