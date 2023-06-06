import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from '../logic/store';
import ErrorBoundary from './error';
import Meta from '../layouts/meta';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Meta Component={Component} />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
