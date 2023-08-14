import { Router } from "./routes";
import { theme } from './styles'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Router />
        <ToastContainer />
      </ChakraProvider>
    </>
  );
}

export default App;
