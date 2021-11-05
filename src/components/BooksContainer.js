import './styles/BookContainer.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import BookLists from './BookLists';
import Form from './Form';
import { getBooks } from '../redux/books/books';

const BooksContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  const BookList = [];
  const Books = useSelector((state) => state.booksReducer.books);
  Object.entries(Books).forEach((element) => {
    const [key, value] = element;
    BookList.push(value.map((item) => (
      <BookLists
        title={item.title}
        Author={item.title}
        category={item.category}
        id={key}
        key={key}
      />
    )));
  });
  return (
    <div className="container pt-5">

      <div>
        <ul>
          {BookList}

        </ul>

      </div>
      <Form />
    </div>
  );
};

export default BooksContainer;
