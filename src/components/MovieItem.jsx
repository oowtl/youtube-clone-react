import React from 'react';
import {Link} from 'react-router-dom';


import styles from './MovieItem.module.css';

const MovieItem = ({ movie }) => {
  const handleClickMovie = (event, movie) => {
    event.preventDefault();
    
  };

  return (
    <li onClick={handleClickMovie} className={styles.MovieItem}>
      <Link to={`video/${movie.id.videoId}`}>
        <img src={movie.snippet.thumbnails.default.url} alt={movie.snippet.title} />
      </Link>
      <Link className={styles.Link} to={`video/${movie.id.videoId}`}>
        <span className={styles.title}>{movie.snippet.title}</span>
        <span className={styles.channelTitle}>{movie.channelTitle}</span>
      </Link>
    </li>
  )
};

export default MovieItem;