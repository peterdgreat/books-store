import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookLists = (props) => {
  const dispatch = useDispatch();
  const {
    title, author, id,
  } = props;

  const handleRemove = () => {
    dispatch(removeBook(id));
  };

  return (

    <li key={id}>
      <span>{title}</span>
      <span>{author}</span>
      <button type="button" onClick={handleRemove}>Remove</button>
    </li>

  );
};

BookLists.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookLists;
