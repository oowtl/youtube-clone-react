import React from 'react';

// css
import styles from './navbar.module.css'

const Navbar = (props) => {
  return (
    <nav className={styles.nav}>
      <img 
        className={styles.logo}
        src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="youtube logo" />
      <span>Youtube</span>
      <div className={styles.search}>
        <input type="text" placeholder='Search...' />
        <button>
          <img
            src={`${process.env.PUBLIC_URL}/images/search.png`} alt="search button" />
        </button>
      </div>
    </nav>
  )
}

export default Navbar;