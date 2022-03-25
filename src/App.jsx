// 기능
import {Routes, Route, Link} from 'react-router-dom';
// components
import MainPage from './components/MainPage';
import Navbar from './components/navbar';
// etc
import styles from './App.module.css';


function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        {/* <Route> */}
      </Routes>
    </div>
  );
}

export default App;
