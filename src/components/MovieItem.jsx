import React from 'react';
import {Link} from 'react-router-dom';


import styles from './MovieItem.module.css';

const MovieItem = ({ movie }) => {
  const handleClickMovie = (event, movie) => {
    event.preventDefault();
    
  };

  return (
    <Link to={`video/${movie.id.videoId}`}>
      <li onClick={handleClickMovie} className={styles.MovieItem}>
        <img src={movie.snippet.thumbnails.default.url} alt={movie.snippet.title} />
        <span className={styles.title}>{movie.snippet.title}</span>
        <span className={styles.channelTitle}>{movie.channelTitle}</span>
      </li>
    </Link>
  )
};

export default MovieItem;