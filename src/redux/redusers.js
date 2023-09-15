import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from 'redux/contactsSlice';
import { filterReducer } from 'redux/filterSlice';

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
