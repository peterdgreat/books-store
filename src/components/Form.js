import './styles/Form.css';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState();

  const submitBookToStore = () => {
    const newBook = {
      item_id: uuidv4(),
      title: book.title,
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
    <div className="mt-5">
      <h3>ADD NEW BOOK</h3>
      <form className="row mt-3">
        <div className="mb-3  col-md-7 p-0 d-flex align-items-center">
          <input type="text" className="form-control" name="title" onChange={handleChange} placeholder="Add your title" />
        </div>

        <div className=" mb-3  col-md-3 d-flex align-items-center justify-content-center">
          <select className="form-select" name="category" defaultValue="category" onChange={handleChange}>
            <option>category...</option>
            <option value="action">Action</option>
            <option value="science fiction">Science Fiction</option>
            <option value="economy">Economy</option>
          </select>
        </div>
        <div className="col-md-2 d-flex justify-content-end align-items-center mb-3 p-0 ">
          <Button variant="contained" onClick={submitBookToStore} className="Add col-12" disableElevation>ADD BOOk</Button>

        </div>

      </form>
    </div>
  );
};

export default Form;
