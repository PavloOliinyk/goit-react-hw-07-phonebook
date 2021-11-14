import PropTypes from 'prop-types';
import s from './Contact.module.css';
import { useDeleteContactMutation } from '../../../redux/contactSlice';

function Contact({ contact: { name, phone, id } }) {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <li className={s.card}>
      <div className={s.cardContent}>
        <p className={s.cardInfo}>{name}</p>
        <p className={s.cardInfo}>{phone}</p>
        <button className={s.cardButton} onClick={() => deleteContact(id)}>
          Delete contact
        </button>
      </div>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string.isRequired),
};

export default Contact;
