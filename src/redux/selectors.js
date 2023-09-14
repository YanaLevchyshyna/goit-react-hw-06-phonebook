export const getContacts = state => state.contacts; // Повертає список контактів із state

export const getFilter = state => state.filter; // Повертає поточний фільтр із state

export const getContactBySearch = state => {
  const contacts = getContacts(state);

  const filter = getFilter(state);

  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(normalizedFilter)
  );
  return filteredContacts;
};
