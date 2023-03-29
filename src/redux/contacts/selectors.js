export const selectContacts = state => state.contacts.contacts.items;
export const selectFilter = state => state.contacts.filter;
export const selectLoading = state => state.contacts.contacts.isLoading;

export const selectFilteredContacts = state => {
  const contacts = selectContacts(state);
  const filterValue = selectFilter(state);

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );
};
