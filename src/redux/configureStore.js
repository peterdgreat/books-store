import { createStore, combineReducers, applyMiddleware } from 'redux';
import Logger from 'redux-logger';
import booksReducer from './books/books';

const reducer = combineReducers({
  booksReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(Logger),
);

export default store;
