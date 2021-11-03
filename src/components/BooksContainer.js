import React from 'react';
import BookLists from './BookLists';
import Form from './Form';

const BooksContainer = () => {
  const Books = [
    {
      title: 'The Hunger Games',
      id: 1,
      author: 'Suzanne Collins',
      category: 'Action',
    },
    {
      title: 'Dune',
      id: 2,
      author: 'Frank Halbert',
      category: 'Science Fiction',
    },
    {
      title: 'TCapital in the Twenty-First Century',
      id: 3,
      author: 'Suzanne Collins',
      category: 'Economy',
    },
  ];
  return (
    <div>

      <ul>
        {Books.map((book) => (
          <BookLists
            key={book.id}
            id={book.id}
            category={book.category}
            author={book.author}
            title={book.title}
          />
        ))}

      </ul>
      <Form />
    </div>
  );
};

export default BooksContainer;
