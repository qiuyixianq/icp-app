import { createSlice } from '@reduxjs/toolkit';
import { cashInData } from './cashInDataEg';


//[{...}]
const initialState = cashInData;

const cashInSlice = createSlice({
    name: 'cashIn',
    initialState,
    reducers: {
        addCashIn: (state, action) => {
            state.push(action.payload);     
        }
    }
});

export const { addCashIn } = cashInSlice.actions;
export default cashInSlice.reducer;