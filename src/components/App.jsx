import { Box, Spinner, Text } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { refreshUser } from '../redux/auth/authOperations';
import { selectIsLoggedIn, selectIsRefreshing, selectToken } from '../redux/auth/authSelectors';
import { getLoading } from '../redux/phonebook/selectors';
import FormLoginUser from './FormLoginUser/FormLoginUser';
import FormRegisterUser from './FormRegisterUser/FormRegisterUser';
import Phonebook from './Phonebook/Phonebook';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import SharedLayout from './SharedLayout/SharedLayout';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);
  const isRefreshing = useSelector(selectIsRefreshing);
  if (!isLoggedIn && token !== null) {
    dispatch(refreshUser());
  }
  return isRefreshing ? (
    <Text fontSize="20px" color="blue.600">
      Проверяем пользователя
    </Text>
  ) : (
    <Box w="80%" m="auto" minW="320px">
      <Routes>
        <Route path="" element={<SharedLayout />}>
          <Route
            index
            element={
              <ProtectedRoute>
                <FormLoginUser />
              </ProtectedRoute>
            }
          />
          <Route
            path="registration"
            element={
              <ProtectedRoute>
                <FormRegisterUser />
              </ProtectedRoute>
            }
          />
          <Route
            path="phonebook"
            element={
              <PrivateRoute>
                <Phonebook />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
      {isLoading && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Spinner
            thickness="20px"
            speed="2s"
            emptyColor="gray.200"
            color="blue.500"
            sx={{ width: '200px', height: '200px' }}
          />
        </div>
      )}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Box>
  );
};

export default App;
