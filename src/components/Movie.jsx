import  React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie(props){
  return (
    <div>
      <img src={props.coverImg} />
      <h2>
        <Link to={`/movie/${props.id}`}>{props.title}</Link>
      </h2>
      <p>{props.summary}</p>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
}


export default Movie;