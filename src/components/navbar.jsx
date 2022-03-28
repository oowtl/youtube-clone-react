import React, { useRef } from 'react';

// css
import styles from './navbar.module.css'

const Navbar = (props) => {
  const searchRef = useRef();

  const onSearchClick = (event) => {
    event.preventDefault();
    if (searchRef.current.value !== '') {
      props.handleSearchClick(searchRef.current.value);
    }
    searchRef.current.value = '';
  };

  return (
    <nav className={styles.nav}>
      <img 
        className={styles.logo}
        src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="youtube logo" />
      <span>Youtube</span>
      <div className={styles.search}>
        <input ref={searchRef} type="text" placeholder='Search...' />
        <button onClick={onSearchClick}>
          <img
            src={`${process.env.PUBLIC_URL}/images/search.png`} alt="search button" />
        </button>
      </div>
    </nav>
  )
}

export default Navbar;