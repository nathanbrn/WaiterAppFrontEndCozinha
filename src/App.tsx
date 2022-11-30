import { Header } from './components/Header';
import { GlobalStyles } from './styles/GlobalStyles';
import { Orders } from './components/Orders/index';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <>
      <GlobalStyles />
      < Header />
      <Orders />
      <ToastContainer position='bottom-center'/>
    </>
  );
}
