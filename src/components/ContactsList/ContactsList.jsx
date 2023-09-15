import { useSelector } from 'react-redux';
import { getContactBySearch } from 'redux/selectors';
import ContactItem from '../ContactItem/ContactItem';

import { ContactsListWrapp, List, ListItem } from './ContactsList.styled';

export default function ContactsList() {
  const contacts = useSelector(getContactBySearch);
  // console.log('contacts ==>', contacts);

  return (
    <ContactsListWrapp>
      <List>
        {contacts.map(({ name, number, id }) => {
          return (
            <ListItem key={id}>
              <ContactItem name={name} number={number} id={id} />
            </ListItem>
          );
        })}
      </List>
    </ContactsListWrapp>
  );
}
