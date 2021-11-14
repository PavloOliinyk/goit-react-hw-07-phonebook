import { useState } from 'react';
import { useCreateContactMutation } from '../../redux/contactSlice';

import s from './ContactForm.module.css';

function ContactForm({ contacts }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [createContact] = useCreateContactMutation();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isNotUniqueContact = contacts.some(contact =>
      contact.name.includes(name),
    );

    if (isNotUniqueContact) {
      window.alert(`${name} is already in contacts`);
      reset();
      return;
    }

    createContact({ name, number });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={s.background}>
        <div className={s.container}>
          <div className={s.screen}>
            <div className={s.screenHeader}>
              <div className={s.screenHeaderLeft}>
                <div className={`${s.screenHeaderButton} ${s.close}`}></div>
                <div className={`${s.screenHeaderButton} ${s.maximize}`}></div>
                <div className={`${s.screenHeaderButton} ${s.minimize}`}></div>
              </div>
              <div className={s.screenHeaderRight}>
                <div className={s.screenHeaderEllipsis}></div>
                <div className={s.screenHeaderEllipsis}></div>
                <div className={s.screenHeaderEllipsis}></div>
              </div>
            </div>
            <div className={s.screenBody}>
              <div className={s.screenBodyItem}>
                <label className={s.appFormGroup}>
                  Name
                  <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    value={name}
                    onChange={handleChange}
                    className={s.appFormControl}
                  />
                </label>
                <label className={s.appFormGroup}>
                  Number
                  <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    value={number}
                    onChange={handleChange}
                    className={s.appFormControl}
                  />
                </label>
                <button className={s.appFormButton}>Add contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
