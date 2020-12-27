import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import logger from 'redux-logger';
import { UpdateRestaurants } from '@utils/redux/middlewares';
import rootReducer from '@utils/redux/rootReducer';
import settings from './settings';

const client = axios.create({
  baseURL: settings.BASE_URL,
  responseType: 'json',
  headers: {
    'user-key': settings.API_KEY,
    'Accept': 'application/json',
  }
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([logger, axiosMiddleware(client), UpdateRestaurants]),
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('../utils/redux/rootReducer', () => {
    const newRootReducer = require('@utils/redux/rootReducer').default;
    store.replaceReducer(newRootReducer);
  });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
