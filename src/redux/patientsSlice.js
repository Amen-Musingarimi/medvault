import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state for patients
const initialState = {
  patients: [],
  status: 'idle',
  error: null,
};

// Define the thunk to fetch patients from the server
export const fetchPatients = createAsyncThunk(
  'patients/fetchPatients',
  async () => {
    try {
      const response = await axios.get('http://localhost:8080/patients/list');
      return response.data.patients;
    } catch (error) {
      throw new Error('Failed to fetch patients');
    }
  }
);

// Define the thunk to create a patient
export const createPatient = createAsyncThunk(
  'patients/createPatient',
  async (patientData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://localhost:8080/patients/post',
        patientData
      );
      return response.data.patient;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// Define the patients slice
const patientsSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle the pending state while fetching patients
    builder.addCase(fetchPatients.pending, (state) => {
      state.status = 'loading';
    });

    // Handle the success state after fetching patients
    builder.addCase(fetchPatients.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.patients = action.payload;
    });

    // Handle the error state if fetching patients fails
    builder.addCase(fetchPatients.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });

    // Handle the pending state while creating a patient
    builder.addCase(createPatient.pending, (state) => {
      state.status = 'loading';
    });

    // Handle the success state after creating a patient
    builder.addCase(createPatient.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.patients.push(action.payload);
    });

    // Handle the error state if creating a patient fails
    builder.addCase(createPatient.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });
  },
});

export default patientsSlice.reducer;
