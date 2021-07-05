import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cashInCategory: ['Sales', 'Comission', 'Bonus', 'Investment'],
    cashOutCategory: ['Stock','Rent','Transportation']
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        addCashInCategory: (state,action) => {
            state.cashInCategory.push(action.payload);
        },
        
        addCashOutCategory: (state,action) => {
            state.cashOutCategory.push(action.payload);
        }
    }
});

export const { addCashInCategory, addCashOutCategory } = categorySlice.actions;
export default categorySlice.reducer;