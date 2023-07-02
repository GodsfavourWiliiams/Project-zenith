import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from '../logic/store';
// import ErrorBoundary from './error';
import Meta from '../layouts/meta';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Meta Component={Component} />
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
