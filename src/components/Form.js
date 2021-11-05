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
    <div>
      <h3>ADD NEW BOOK</h3>
      <form className="row">
        <div className="mb-3 me-2 col-md-6 d-flex align-items-center">
          <input type="text" className="form-control" name="title" onChange={handleChange} placeholder="Add your title" />
        </div>

        <div className=" mb-3 me-2 col-md-3 d-flex align-items-center">
          <select className="form-select" name="category" defaultValue="category" onChange={handleChange}>
            <option>category...</option>
            <option value="action">Action</option>
            <option value="science fiction">Science Fiction</option>
            <option value="economy">Economy</option>
          </select>
        </div>
        <div className="col-md-2 d-flex justify-content-end align-items-center mb-3 ">
          <Button variant="contained" onClick={submitBookToStore} className="Add" disableElevation>ADD BOOk</Button>

        </div>

      </form>
    </div>
  );
};

export default Form;
