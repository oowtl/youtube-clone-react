// 기능
import axios from 'axios';
import {Routes, Route, Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
// components
import MainPage from './components/MainPage';
import Navbar from './components/navbar';
import MovieItem from './components/MovieItem';
// etc
import styles from './App.module.css';
import apiDataJson from './components/response/youtube_search.json';
import MovieDetail from './components/MovieDetail';


function App() {
  // state
  const [data, setData] = useState([]);

  //function
  const youtubeSearch = (type, word) => {
    // type : init (처음 시작할 때) , search ( 검색할 때)
    const searchParams = {
      params: {
        key: `${process.env.REACT_APP_API_KEY}`,
        part: 'snippet',
        maxResults: 25,
        q: word,
        order: 'viewCount'
      }
    }
    if (type === "search") {
      searchParams.order = 'viewCount';
    }

    // youtube api 할당량으로 인해서 막아놓겠음.
    // axios.get(`${process.env.REACT_APP_API_URL}/search`,searchParams)
    //   .then( res => {
    //     setData(res.data.items);
    //   })
    //   .catch( err => {
    //     console.log(err);
    //   })

    const {items} = apiDataJson;
    setData(items);
  };

  const handleSearchClick = (word) => {
    youtubeSearch("search", word);
  }
  
  useEffect(() => {
    youtubeSearch("init", null)
  })

  return (
    <div className={styles.App}>
      <Navbar handleSearchClick={handleSearchClick}/>
      <Routes>
        <Route path='/'
          element={
            <MainPage
              apiData = {data}/>
          } />
        <Route path="video/:videoId"
          element={
            <MovieDetail 
              apiData = {data}/>
          }/>
      </Routes>
    </div>
  );
}

export default App;
