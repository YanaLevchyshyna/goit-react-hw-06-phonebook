import { useDispatch } from 'react-redux';
import { BsXCircleFill } from 'react-icons/bs';
import { ContactsListBtn } from './ContactItem.styled';
import { deleteContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';

export default function ContactItem({ name, number, id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <span>{name}:</span>
      <span>{number}</span>
      <ContactsListBtn type="button" onClick={handleDelete}>
        <BsXCircleFill size="16" />
      </ContactsListBtn>
    </>
  );
}

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
