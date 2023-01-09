import { Button } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { selectUserName } from '../../redux/auth/authSelectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  return (
    <>
      <span className="headerLink">Welcome, {userName}</span>
      <Button
        type="button"
        m={8}
        colorScheme="blue"
        variant="outline"
        onClick={() => dispatch(logOut())}
      >
        Выйти
      </Button>
    </>
  );
};

export default UserMenu;
