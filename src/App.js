import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import Container from './Container';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Contact from './ContactList/Contact';
import { useFetchContactsQuery } from './redux/contactSlice';

function App() {
  const { data: contacts } = useFetchContactsQuery();

  const filter = useSelector(state => state.filter);

  const filterContacts = contacts =>
    contacts
      ? [...contacts].filter(({ name }) => name.toLowerCase().includes(filter))
      : null;

  return (
    <Container>
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <h2 className="title">Contacts</h2>
      <Filter />

      <ContactList>
        {filterContacts(contacts) &&
          filterContacts(contacts).map(contact => (
            <Contact key={uuidv4()} contact={contact} />
          ))}
      </ContactList>
    </Container>
  );
}

export default App;
