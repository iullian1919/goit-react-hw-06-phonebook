import React from 'react';
import ContactList from './ContactList';
import Filter from './Filter/';
import ContactForm from './ContactForm/ContactForm';

const App = () => {
  return (
    <div>
      <h1
        style={{
          fontSize: '35px',
          textAlign: 'left',
          marginLeft: '20px',
          marginBottom: '20px',
        }}
      >
        Phonebook
      </h1>
      <ContactForm />
      <h2
        style={{
          fontSize: '30px',
          textAlign: 'left',
          marginLeft: '20px',
          marginBottom: '10px',
        }}
      >
        Contacts
      </h2>
      <Filter />
      <ContactList />
    </div>
  );
};
export default App;
