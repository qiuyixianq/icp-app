import { configureStore } from '@reduxjs/toolkit';
import navBarReducer from '../components/NavBar/navBarSlice';

export const store = configureStore({
  reducer: {
    navBar: navBarReducer
  },
});
