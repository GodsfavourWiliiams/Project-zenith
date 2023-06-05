import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './reducers';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();
const middleware = [thunk, loggerMiddleware];

// if (process.env.NODE_ENV === 'development') {
//   middleware.push(loggerMiddleware);
// }

export default configureStore({
  reducer: { dashboardReducer },
  middleware: [thunk, loggerMiddleware],
});
