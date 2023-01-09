// import PropTypes from 'prop-types';
import { AddIcon, PhoneIcon } from '@chakra-ui/icons';
import {
  Button,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/phonebook/operations';
import { getContacts, getLoading } from '../../redux/phonebook/selectors';
import css from './FormAddContact.module.css';

const INITIAL_FORM_STATE = {
  name: '',
  number: '',
};

export const FormAddContact = () => {
  const [name, setName] = useState(INITIAL_FORM_STATE.name);
  const [number, setNumber] = useState(INITIAL_FORM_STATE.number);

  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getLoading);
  const dispatch = useDispatch();

  const updateContacts = ({ name, number }) => {
    const isNameInContacts = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isNameInContacts) {
      alert('Не можна!!!');
      return false;
    }
    dispatch(addContact({ name, number }));
    return true;
  };

  const handleInputChange = ({ target }) => {
    const { name } = target;
    switch (name) {
      case 'name':
        setName(target.value);
        break;
      case 'number':
        setNumber(target.value);
        break;
      default:
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const isOperationSuccessful = updateContacts({ name, number });
    if (isOperationSuccessful) {
      setName(INITIAL_FORM_STATE.name);
      setNumber(INITIAL_FORM_STATE.number);
    }
  };

  return (
    <Container maxW="md" p="50" mt="30px" boxShadow="lg" rounded="md">
      <h1 className={css.title}>Phonebook</h1>
      <form onSubmit={handleSubmit} autoComplete="off" className={css.container}>
        <label htmlFor="" className={css.label}>
          <Text fontSize="20px" color="blue.600">
            Name
          </Text>
          <Stack spacing={4}>
            <InputGroup>
              <InputLeftElement m={4} children={<AddIcon color="blue.600" />} />
              <Input
                placeholder="name"
                m={4}
                htmlSize={20}
                width="auto"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                onChange={handleInputChange}
              />
            </InputGroup>
            <Text fontSize="20px" color="blue.600">
              Number
            </Text>
            <InputGroup>
              <InputLeftElement m={4} children={<PhoneIcon color="blue.600" />} />
              <Input
                placeholder="Phone number"
                m={4}
                htmlSize={20}
                width="auto"
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                onChange={handleInputChange}
              />
            </InputGroup>
          </Stack>
        </label>
        <Button m={4} colorScheme="blue" variant="outline" type="submit" disabled={isLoading}>
          Add contact
        </Button>
      </form>
    </Container>
  );
};

export default FormAddContact;
