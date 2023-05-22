import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'


// Customizing the Chakra UI theme
const theme = extendTheme({
  colors: {
    brand: {
      50: '#F5F7FF',
      100: '#DDE2FF',
      // Add more color shades as needed
    },
  },
  fonts: {
    body: 'Helvetica Neue, sans-serif',
    heading: 'Poppins, sans-serif',
  },
  // Add more theme configurations as needed
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
  </React.StrictMode>
);
