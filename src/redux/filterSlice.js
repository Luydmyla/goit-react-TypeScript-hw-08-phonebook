import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    // функція для пошуку контакту з фільтром
    updateFilter: (state, action) => action.payload,
  },
});
// Action creators are generated for each case reducer function
export const { updateFilter } = filterSlice.actions;
