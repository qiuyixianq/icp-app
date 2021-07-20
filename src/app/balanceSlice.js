import { createSlice } from '@reduxjs/toolkit';

const initialState = 4300;

const balanceSlice = createSlice({
    name: 'balance',
    initialState,
    reducers: {
        updateBalance: (state,action) => {
            return state += action.payload;
        },
        setBalance: (state,action) => {
            return action.payload;
        }
    }
});

export const { updateBalance, setBalance } = balanceSlice.actions;
export default balanceSlice.reducer;