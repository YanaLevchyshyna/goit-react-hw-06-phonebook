import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from 'redux/contactsSlice';
import { formReducer } from 'redux/formSlice';
import { filterReducer } from 'redux/filterSlice';

export const store = configureStore({
  reducer: {
    contactsForm: formReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
