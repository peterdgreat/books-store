import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookLists = (props) => {
  const dispatch = useDispatch();
  const {
    title, id, category,
  } = props;

  const handleRemove = () => {
    dispatch(removeBook(id));
  };

  return (

    <li key={id} className="d-flex justify-content-around">
      <span>
        {category}
      </span>
      <span>{title}</span>
      {/* <span>{author}</span> */}
      <button type="button" onClick={handleRemove}>Remove</button>
    </li>

  );
};

BookLists.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  // author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookLists;
