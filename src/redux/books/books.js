const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const APP_ID = 'NXWuJOcnxMpgN5v1Bl6U';
const APP_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_ID}/books`;

const initialState = {
  books: [],
};
export const getBooks = () => async (dispatch) => {
  await fetch(APP_URL, {
    method: 'GET',
  }).then((response) => response.json()).then((data) => {
    dispatch({
      type: GET_BOOKS,
      payload: data,
    });
  });
};

export const addBook = (payload) => async (dispatch) => {
  await fetch(APP_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(() => dispatch(getBooks()));
};

export const removeBook = (payload) => async (dispatch) => {
  await fetch(`${APP_URL}/${payload}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(() => dispatch(getBooks()));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
