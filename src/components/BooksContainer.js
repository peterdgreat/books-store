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
  const Books = useSelector((state) => state.booksReducer.books);
  return (
    <div>

      <ul>
        {Books.map((book) => (
          <BookLists
            key={book.id}
            id={book.id}
            // author={book.author}
            title={book.title}
            category={book.category}
          />
        ))}

      </ul>
      <Form />
    </div>
  );
};

export default BooksContainer;
