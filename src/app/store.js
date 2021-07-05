import { configureStore } from '@reduxjs/toolkit';
import navBarReducer from '../components/NavBar/navBarSlice';
import balanceReducer from './balanceSlice';
import cashInReducer from '../components/CashIn/cashInSlice';
import cashOutReducer from '../components/CashOut/cashOutSlice';

export const store = configureStore({
  reducer: {
    navBar: navBarReducer,
    balance: balanceReducer,
    cashIn: cashInReducer,
    cashOut: cashOutReducer,
  },
});
