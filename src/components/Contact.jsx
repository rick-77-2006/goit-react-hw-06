import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';
import css from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={css.list}>
      <p>Name: {contact.name}</p>
      <p>Phone Number: {contact.phoneNumber}</p> 
      <button onClick={handleDelete} className={css.btn}>Delete</button>
    </li>
  );
};

export default Contact;





