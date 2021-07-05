import { createSlice } from '@reduxjs/toolkit';

const initialState = 0;

const balanceSlice = createSlice({
    name: 'balance',
    initialState,
    reducers: {
        updateBalance: (state,action) => {
            state += action.payload;
        }
    }
});

export const { updateBalance } = balanceSlice.actions;
export default balanceSlice.reducer;