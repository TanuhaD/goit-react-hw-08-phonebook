import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk('phonebook/fetch', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`/contacts`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const deleteContact = createAsyncThunk('contact/delete', async (id, thunkAPI) => {
  try {
    const response = await axios.delete(`/contacts/${id}`);

    toast.success(`Contact ${response.data.name} deleted!`);
    return response.data.id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const addContact = createAsyncThunk('contact/add', async (contact, thunkAPI) => {
  try {
    const response = await axios.post('/contacts', contact);
    toast.success(`Contact ${response.data.name} created!`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// export const fetchContacts = () => dispatch => {
//   dispatch(fetchingInProgress());
//   axios
//     .get('phonebook')
//     .then(response => {
//       dispatch(fetchingSuccess());
//       dispatch(fetchAll(response.data));
//     })
//     .catch(error => dispatch(fetchingError(error.message)));
// };

// export const deleteContact = id => dispatch => {
//   dispatch(fetchingInProgress());
//   axios
//     .delete(`phonebook/${id}`)
//     .then(({ data }) => {
//       dispatch(fetchingSuccess());
//       dispatch(deleteContactAction(data.id));
//     })
//     .catch(error => dispatch(fetchingError(error.message)));
// };

// export const addContact = (name, number) => dispatch => {
//   dispatch(fetchingInProgress());
//   axios
//     .post(`phonebook/`, { name, number })
//     .then(({ data }) => {
//       dispatch(fetchingSuccess());
//       dispatch(addContactAction(data));
//     })

//     .catch(error => dispatch(fetchingError(error.message)));
// };
