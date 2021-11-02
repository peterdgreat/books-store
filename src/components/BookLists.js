import React from 'react';

const BookLists = () => {
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
    <ul>
      {Books.map((book) => (
        <li key={book.id}>
          <span>{book.category}</span>
          <span>{book.title}</span>
          <span>{book.author}</span>
          <button type="button">Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default BookLists;
