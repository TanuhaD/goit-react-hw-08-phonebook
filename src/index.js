import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import { App } from './components/App';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react';
import chakraTheme from '@chakra-ui/theme';
const {
  Button,
  Input,
  Container,
  Box,
  List,
  ListItem,
  ListIcon,
  Icon,
  IconButton,
  Stack,
  InputGroup,
  InputLeftElement,
  Text,
  CircularProgress,
  Spinner,
} = chakraTheme.components;
const theme = extendBaseTheme({
  components: {
    Box,
    Container,
    Button,
    Input,
    List,
    ListItem,
    ListIcon,
    Icon,
    IconButton,
    Stack,
    InputGroup,
    InputLeftElement,
    Text,
    CircularProgress,
    Spinner,
  },
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="goit-react-hw-08-phonebook">
          <ChakraBaseProvider theme={theme}>
            <App />
          </ChakraBaseProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
