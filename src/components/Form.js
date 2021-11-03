import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

// require('react-dom');
// window.React2 = require('react');

// console.log(window.React1 === window.React2);

const Form = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState();

  const submitBookToStore = () => {
    const newBook = {
      id: uuidv4(),
      title: book.title,
      author: book.author,
    };
    dispatch(addBook(newBook));
  };
  const handleChange = (e) => {
    setBook({
      ...book, [e.target.name]: e.target.value,
    });
  };
  return (
    <form>
      <input type="text" name="title" onChange={handleChange} id="title" placeholder="Add your title" />
      <br />
      <input type="text" name="author" onChange={handleChange} id="author" placeholder="Authors name" />
      <button type="button" onClick={submitBookToStore}>Add Book</button>
    </form>
  );
};

export default Form;
