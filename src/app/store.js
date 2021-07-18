import { combineReducers, configureStore } from '@reduxjs/toolkit';
import balanceReducer from './balanceSlice';
import cashInReducer from '../components/CashIn/cashInSlice';
import cashOutReducer from '../components/CashOut/cashOutSlice';
import categoryReducer from './categorySlice';

const cashInOut = combineReducers({
  cashInData: cashInReducer,
  cashOutData: cashOutReducer
});

export const store = configureStore({
  reducer: {
    balance: balanceReducer,
    category: categoryReducer,
    cashInOut,
  },
});
