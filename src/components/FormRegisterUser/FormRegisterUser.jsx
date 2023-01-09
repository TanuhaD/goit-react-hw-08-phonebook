import { EmailIcon, LockIcon, StarIcon } from '@chakra-ui/icons';
import { Button, Container, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';

const FormRegisterUser = () => {
  const dispatch = useDispatch();
  const handleFormSubmit = evt => {
    evt.preventDefault();
    const name = evt.currentTarget.elements.name.value;
    const email = evt.currentTarget.elements.email.value;
    const password = evt.currentTarget.elements.password.value;
    dispatch(register({ name, email, password }));
    evt.currentTarget.reset();
  };

  return (
    <Container maxW="md" p="50px" mt="30px" boxShadow="lg" rounded="md">
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>
            <Text fontSize="20px" color="blue.600" m={4}>
              {' '}
              Name
            </Text>
            <InputGroup>
              <InputLeftElement m={4} children={<StarIcon color="blue.600" />} />
              <Input m={4} htmlSize={20} width="auto" type="text" name="name" placeholder="name" />
            </InputGroup>
          </label>
        </div>
        <div>
          <label>
            <Text fontSize="20px" color="blue.600" m={4}>
              {' '}
              Email
            </Text>
            <InputGroup>
              <InputLeftElement m={4} children={<EmailIcon color="blue.600" />} />
              <Input
                m={4}
                htmlSize={20}
                width="auto"
                type="text"
                name="email"
                placeholder="email"
              />
            </InputGroup>
          </label>
        </div>
        <div>
          <label>
            <Text fontSize="20px" color="blue.600" m={4}>
              {' '}
              Password
            </Text>
            <InputGroup>
              <InputLeftElement m={4} children={<LockIcon color="blue.600" />} />
              <Input
                m={4}
                htmlSize={20}
                width="auto"
                type="password"
                name="password"
                placeholder="password"
              />
            </InputGroup>
          </label>
        </div>
        <Button m={8} colorScheme="blue" variant="outline" type="submit">
          Register
        </Button>
      </form>
    </Container>
  );
};

export default FormRegisterUser;
