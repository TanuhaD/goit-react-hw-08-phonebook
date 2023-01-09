import React from 'react';
import Contacts from '../Contacts/Contacts';
import Filter from '../Filter/Filter';
import FormAddContact from '../FormAddContact/FormAddContact';

const Phonebook = () => {
  return (
    <div>
      <FormAddContact />
      <Contacts>
        <Filter />
      </Contacts>
    </div>
  );
};

export default Phonebook;
