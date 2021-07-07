import { configureStore } from '@reduxjs/toolkit';
import navBarReducer from '../components/NavBar/navBarSlice';
import balanceReducer from './balanceSlice';
import cashInReducer from '../components/CashIn/cashInSlice';
import cashOutReducer from '../components/CashOut/cashOutSlice';
import categoryReducer from './categorySlice';
import profitlossReducer from '../components/Dashboard/dashboardSlice';

export const store = configureStore({
  reducer: {
    navBar: navBarReducer,
    balance: balanceReducer,
    category: categoryReducer,
    cashInData: cashInReducer,
    cashOutData: cashOutReducer,
    profitLoss: profitlossReducer,
  },
});
