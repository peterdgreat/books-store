import React from 'react';
import { useSelector } from 'react-redux';
import BookLists from './BookLists';
import Form from './Form';

const BooksContainer = () => {
  const Books = useSelector((state) => state.booksReducer.books);
  return (
    <div className="container">

      <section className="row">
        <ul className="col-md-6 ">
          {Books.map((book) => (
            <BookLists
              key={book.id}
              id={book.id}
              author={book.author}
              title={book.title}
              category={book.category}
            />
          ))}

        </ul>
      </section>
      <Form />
    </div>
  );
};

export default BooksContainer;
