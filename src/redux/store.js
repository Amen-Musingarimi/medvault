import { configureStore } from '@reduxjs/toolkit';
import AuthenticationReducer from './authenticationSlice';
import SideBarReducer from './sideBarSlice';
import PatientsReducer from './patientsSlice';

const store = configureStore({
  reducer: {
    auth: AuthenticationReducer,
    nav: SideBarReducer,
    pat: PatientsReducer,
  },
});

export default store;
