import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    filterContacts(_, action) {
      return action.payload;
    },
  },
});

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
