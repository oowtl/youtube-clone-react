// 기능
import axios from 'axios';
import {Routes, Route, Link} from 'react-router-dom';
import { useState } from 'react';
// components
import MainPage from './components/MainPage';
import Navbar from './components/navbar';
// etc
import styles from './App.module.css';


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
        order: 'relevance'
      }
    }
    if (type === "search") {
      searchParams.order = 'viewCount';
    }
    axios.get(`${process.env.REACT_APP_API_URL}/search`,searchParams)
      .then( res => {
        setData(res.data.items);
      })
      .catch( err => {
        console.log(err);
      })
  };

  const handleSearchClick = (word) => {
    youtubeSearch("search", word);
  }

  return (
    <div className={styles.App}>
      <Navbar handleSearchClick={handleSearchClick}/>
      <Routes>
        <Route path='/' element={<MainPage />} />
        {/* <Route> */}
      </Routes>
    </div>
  );
}

export default App;
