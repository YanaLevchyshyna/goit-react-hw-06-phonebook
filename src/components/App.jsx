import { ToastContainer } from 'react-toastify';
import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import { Container, Title } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <Form />
      <Filter />
      <ContactsList />
      <ToastContainer />
    </Container>
  );
};
