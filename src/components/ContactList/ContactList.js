import s from './ContactList.module.css';

function ContactList({ children }) {
  return (
    <div className={s.container}>
      <ul className={`list ${s.cardContainer}`}>{children}</ul>
    </div>
  );
}

export default ContactList;
