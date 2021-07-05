import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentNav: ''
}

const navBarSlice = createSlice({
    name: 'currentNav',
    initialState,
    reducers: {
        setCurrentNav: (state,action) => {
            state.currentNav = action.payload;
        }
    }
});

export const { setCurrentNav } = navBarSlice.actions;
export default navBarSlice.reducer;