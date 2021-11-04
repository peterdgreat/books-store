/* eslint-disable no-undef */
const GET_BOOK_SUCCESS = 'bookStore/books/BOOK_SUCCESS';

// const ADD_BOOK = 'bookStore/books/ADD_BOOk';
// const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const appId = 'MFla1FZXtNvW7w7zQJyI';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`;

const initialState = {
  books: [],
};

export const getBooks = () => (dispatch) => {
  fetch(url).then((response) => {
    response.json().then((data) => {
      dispatch({
        type: GET_BOOK_SUCCESS,
        payload: data,
      });
    });
  });
};

export const addBook = (payload) => (dispatch) => {
  fetch(url, {
    method: 'POST',
    headers: {
      contentType: 'application/json',
    },
    body: JSON.stringify(payload),

  }).then((response) => {
    if (response.status !== 200) {
      console.log(`Looks like there was a problem. Status Code: ${response.status}`);
      return;
    }
    response.json().then((data) => {
      dispatch({
        type: GET_BOOK_SUCCESS,
        payload: data,
      });
    });
  });
};

export const removeBook = (payload) => (dispatch) => {
  fetch(`${url}/${payload}`, {
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
    },
  }).then(() => {
    dispatch({
      type: GET_BOOK_SUCCESS,
      payload,
    });
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOK_SUCCESS:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
