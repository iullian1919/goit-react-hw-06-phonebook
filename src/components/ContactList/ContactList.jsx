import React from 'react';
import ContactsItem from 'components/ContactItem/ContactItem';
import classes from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'store/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);

  const filteredContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <ul className={classes.contacts}>
      {filteredContacts.map(contact => (
        <ContactsItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
