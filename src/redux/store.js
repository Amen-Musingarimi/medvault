import { configureStore } from '@reduxjs/toolkit';
import AuthenticationReducer from './authenticationSlice';
import SideBarReducer from './sideBarSlice';

const store = configureStore({
  reducer: {
    auth: AuthenticationReducer,
    nav: SideBarReducer,
  },
});

export default store;
