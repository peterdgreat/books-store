import './styles/BookList.css';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookLists = (props) => {
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  const dispatch = useDispatch();
  const {
    title, id, category,
  } = props;

  const handleRemove = () => {
    dispatch(removeBook(id));
  };
  const chapt = progress / 10;

  return (

    <li key={id} className="list-unstyled row bk-bg px-4 py-4 ">
      <section className="col-md-4">
        <div className="d-flex flex-column">

          <span className="category">
            {category}
          </span>
          <span className="title pt-2">{title}</span>
        </div>
        <div className="pt-3 d-flex justify-content-between col-6">
          <button type="button" className="btn ">Comments</button>
          <button type="button" className="btn" onClick={handleRemove}>Remove</button>
          <button type="button" className="btn">Edit</button>

        </div>

      </section>
      <section className="col-md-4 d-flex justify-content-start align-items-center bd-r">
        <CircularProgress variant="determinate" className="prog-h" value={progress} />
        <div className="d-flex flex-column ">
          <span className="r-num">
            {progress }
            %
          </span>
          <span className="completed">
            Completed
          </span>
        </div>
      </section>
      <section className="col-md-4 d-flex flex-column justify-content-between align-items-start">

        <span className="chpt">CURRENT CHAPTER</span>
        <span className="prog-chpt">
          Chapter
          {chapt}
        </span>
        <Button variant="contained" className="update" disableElevation>UPDATE PROGRESS</Button>

      </section>
    </li>

  );
};

BookLists.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookLists;
