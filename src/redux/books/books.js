/* eslint-disable no-undef */
const ADD_BOOK = 'bookStore/books/ADD_BOOk';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const APP_ID = 'G6Nd2Pu54IbbPFQeXivx';
const APP_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_ID}/books`;

const initialState = {
  books: [],
};

const postBook = async (payload) => {
  const book = {
    item_id: payload.id,
    title: payload.title,
    category: payload.category,
  };
  const response = await fetch(APP_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(book),
  });
  return response.text().then((text) => console.log(text));
};

const deleteBook = async (payload) => {
  const response = await fetch(`${APP_URL}/${payload}`, {
    method: 'DELETE',
  });
  return response.text().then((text) => console.log(text));
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      postBook(action.payload);
      return {
        ...state,
        books: [...state.books, action.payload],
      };

    case REMOVE_BOOK:
      deleteBook(action.payload);
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
