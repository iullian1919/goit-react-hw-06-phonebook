import React, { useState } from 'react';
import classes from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'store/contactSlice';
import { getContacts } from 'store/selectors';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', number: '' });
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleInput = ev => {
    const { name, value } = ev.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    const { name, number } = formData;
    const newContact = { name, number };

    if (contacts.some(el => el.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact(newContact));
    ev.target.reset();
  };

  return (
    <form className={classes.main_form} onSubmit={handleSubmit}>
      <label className={classes.label}>
        Name
        <input
          className={classes.contact_input}
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleInput}
        />
      </label>
      <label className={classes.label}>
        Number
        <input
          className={classes.contact_input}
          type="tel"
          name="number"
          required
          value={formData.number}
          onChange={handleInput}
        />
      </label>

      <button className={classes.contact_btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
