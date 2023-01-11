import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { Button, Container, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';

const FormLoginUser = () => {
  const dispatch = useDispatch();
  const handleFormSubmit = evt => {
    evt.preventDefault();
    const email = evt.currentTarget.elements.email.value;
    const password = evt.currentTarget.elements.password.value;
    dispatch(logIn({ email, password }));
  };
  return (
    <Container maxW="md" p="50" mt="30px" boxShadow="lg" rounded="md">
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>
            <Text fontSize="20px" color="blue.600" m={4}>
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
          LogIn
        </Button>
      </form>
    </Container>
  );
};

export default FormLoginUser;
