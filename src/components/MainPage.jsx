import React from 'react';
import MovieItem from './MovieItem';

import styles from './MainPage.module.css';

const MainPage = (props) => {

  return (
    <main>
      <ul className={styles.MainPage}>
        {props.apiData.map(data => {
          return (
            <MovieItem key={data.id.videoId} movie={data}/>
          )
        })}
      </ul>
    </main>
  )
}
export default MainPage;