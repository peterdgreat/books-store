import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch;
  const [data, setData] = useState();

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title: data.title,
      author: data.author,
    };
    console.log(newBook);
    dispatch(addBook(newBook));
  };
  return (
    <form>
      <input type="text" name="title" onChange={onChange} id="title" placeholder="Add your title" />
      <br />
      <input type="text" name="Author" onChange={onChange} id="author" placeholder="Authors name" />
      <button type="button" onClick={submitBookToStore}>Add Book</button>
    </form>
  );
};

export default Form;
