import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Reducers } from './reducers';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

export const Store = createStore(
  Reducers,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);