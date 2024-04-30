import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  medicalRecords: [],
  status: 'idle',
  error: null,
};

export const createMedicalRecord = createAsyncThunk(
  'medicalRecords/createMedicalRecords',
  async (medicalRecordData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://localhost:8080/medicalRecords/post',
        medicalRecordData
      );
      return response.data.medicalRecord;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Define the medical records slice
const medicalRecordsSlice = createSlice({
  name: 'medicalRecords',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle the pending state while creating a patient
    builder.addCase(createMedicalRecord.pending, (state) => {
      state.status = 'loading';
    });

    // Handle the success state after creating a patient
    builder.addCase(createMedicalRecord.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.medicalRecords.push(action.payload);
    });

    // Handle the error state if creating a patient fails
    builder.addCase(createMedicalRecord.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });
  },
});

export default medicalRecordsSlice.reducer;
