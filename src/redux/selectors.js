import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts; // Повертає список контактів із state

export const getFilter = state => state.filter; // Повертає поточний фільтр із state

export const selectContactBySearch = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(normalizedFilter)
    );
    return filteredContacts;
  }
);
// Використовую Мемоізацію, для того щоб уникнути постійного ре-рендеру.
// Selector getContactBySearch returned a different result when called with the same parameters,
// " is a result of the selector returning a new reference (e.g., a new array)
// each time it's called with the same input parameters.

// Мемоізація є формою кешування. Він передбачає відстеження вхідних даних у функцію та
// збереження вхідних даних і результатів для подальшого використання. Якщо функція викликається
// з тими ж входами, що й раніше, функція може пропустити фактичну роботу та повернути той самий
// результат, який вона згенерувала під час останнього отримання цих вхідних значень.
// Це оптимізує продуктивність, виконуючи роботу, лише якщо вхідні дані змінилися,
// і постійно повертаючи ті самі посилання на результати, якщо вхідні дані однакові

// export const getContactBySearch = state => {
//   const contacts = getContacts(state);

//   const filter = getFilter(state);

//   const normalizedFilter = filter.toLowerCase();

//   const filteredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().trim().includes(normalizedFilter)
//   );
//   return filteredContacts;
// };
