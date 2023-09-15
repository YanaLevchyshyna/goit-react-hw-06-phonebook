import { ToastContainer } from 'react-toastify';
import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import { Container, Title, EmptyTitle } from './App.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <Title>Phonebook</Title>
      <Form />
      {contacts.length > 0 ? (
        <Filter />
      ) : (
        <EmptyTitle>
          Your contact list is empty. Please add contacts!
        </EmptyTitle>
      )}
      {contacts.length > 0 && <ContactsList />}
      <ToastContainer />
    </Container>
  );
};
