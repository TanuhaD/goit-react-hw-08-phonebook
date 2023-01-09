import { DeleteIcon, PhoneIcon } from '@chakra-ui/icons';
import { Button, Container, List, ListIcon, ListItem } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/phonebook/operations';
import { getContacts, getLoading, getNameFilter } from '../../redux/phonebook/selectors';
import css from './Contacts.module.css';

function Contacts({ children }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);
  const contacts = useSelector(getContacts);
  const filter = useSelector(getNameFilter);
  const filteredContacts = contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container mb="30px" mt="30px" boxShadow="lg" rounded="md">
      <h2 className={css.title}>Contacts</h2>
      <div className={css.container}>
        {children}
        <List>
          {filteredContacts.map(({ id, name, number }) => {
            return (
              <ListItem key={id}>
                <ListIcon as={PhoneIcon} color="blue.600" />
                {name} {number}
                <Button
                  m={4}
                  leftIcon={<DeleteIcon />}
                  disabled={isLoading}
                  colorScheme="blue"
                  variant="outline"
                  type="button"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  Delete
                </Button>
              </ListItem>
            );
          })}
        </List>
      </div>
    </Container>
  );
}

// Contacts.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
// };

export default Contacts;
