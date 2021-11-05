import { createStore, combineReducers, applyMiddleware } from 'redux';
import Logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer from './books/books';

const reducer = combineReducers({
  booksReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(Logger, thunk),
);

export default store;
