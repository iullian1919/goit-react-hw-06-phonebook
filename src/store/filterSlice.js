import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterUse(state, action) {
      return action.payload;
    },
  },
});
export const { filterUse } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
