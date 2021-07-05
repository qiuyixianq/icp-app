import { createSlice } from '@reduxjs/toolkit';
import { cashOutData } from './cashOutDataEg';

const initialState = cashOutData;

const cashOutSlice = createSlice({
    name: 'cashOut',
    initialState,
    reducers: {
        addCashOut: (state,action) => {
            state.push(action.payload);
        }
    }
});

export const { addCashOut } = cashOutSlice.actions;
export default cashOutSlice.reducer;