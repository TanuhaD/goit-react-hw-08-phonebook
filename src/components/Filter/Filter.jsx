import { Search2Icon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/phonebook/slicers/filterSlice';
import css from './Filter.module.css';
export const Filter = () => {
  const dispatch = useDispatch();
  const handleInputChange = ({ target }) => {
    dispatch(updateFilter(target.value.toLowerCase()));
  };
  return (
    <div className={css.container}>
      <Text fontSize="20px" color="blue.600">
        Find contacts by name
      </Text>
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftElement m={4} children={<Search2Icon color="blue.600" />} />
          <Input m={4} htmlSize={20} type="text" onChange={handleInputChange} />
        </InputGroup>
      </Stack>
    </div>
  );
};

export default Filter;
