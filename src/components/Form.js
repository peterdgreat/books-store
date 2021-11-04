import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState();

  const submitBookToStore = () => {
    const newBook = {
      id: uuidv4(),
      title: book.title,
      author: book.author,
      category: book.category,
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
      <div className="input-group mb-3">
        <input type="text" className="form-control" name="title" onChange={handleChange} id="title" placeholder="Add your title" />
      </div>

      <div className="input-group mb-3">
        <input type="text" className="form-control" name="author" onChange={handleChange} id="author" placeholder="Authors name" />
      </div>
      <div className="input-group mb-3">
        <select className="form-select" id="inputGroupSelect01" name="category" defaultValue="category" onChange={handleChange}>
          <option>category...</option>
          <option value="action">Action</option>
          <option value="science fiction">Science Fiction</option>
          <option value="economy">Economy</option>
        </select>
      </div>

      <button type="button" onClick={submitBookToStore}>Add Book</button>
    </form>
  );
};

export default Form;
