import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    totalExpense: 0,
    totalEarn: 0,
};

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        setTotalExpense: (state,action) => {
            state.totalExpense = action.payload
        },
        setTotalEarn: (state,action) => {
            state.totalEarn = action.payload
        }
    }
});

export const { setTotalExpense, setTotalEarn } = dashboardSlice.actions;
export default dashboardSlice.reducer;