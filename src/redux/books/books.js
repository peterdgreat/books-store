/* eslint-disable no-undef */
const ADD_BOOK = 'bookStore/books/ADD_BOOk';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';
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
  return response.json();
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

export const getBooks = () => async (dispatch) => {
  const books = [];
  let keys;
  let values;
  await fetch(APP_URL, {
    method: 'GET',
  }).then((response) => response.json()).then((data) => {
    [keys, values] = [Object.keys(data), Object.values(data)];
    console.log(data);
  });
  values.forEach((value, index) => {
    const book = {
      id: keys[index],
      title: value[0].title,
      category: value[0].category,
    };
    books.push(book);
  });
  dispatch({
    type: GET_BOOKS,
    payload: books,
  });
};

// getBooks();
// getBooks();

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
