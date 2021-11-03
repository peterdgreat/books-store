import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import useInputHook from '../hooks/inputdata';

require('react-dom');
window.React2 = require('react');

console.log(window.React1 === window.React2);

const Form = () => {
  const dispatch = useDispatch();
  const { value: titleValue, onChange: titleOnChange } = useInputHook('');
  const { value: authorValue, onChange: authorOnChange } = useInputHook('');

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title: titleValue,
      author: authorValue,
    };
    dispatch(addBook(newBook));
    console.log(newBook);
  };
  return (
    <form>
      <input type="text" name="title" onChange={titleOnChange} id="title" placeholder="Add your title" />
      <br />
      <input type="text" name="Author" onChange={authorOnChange} id="author" placeholder="Authors name" />
      <button type="button" onClick={submitBookToStore}>Add Book</button>
    </form>
  );
};

export default Form;
