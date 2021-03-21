import React from 'react';
import styles from './Header.module.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.header__logo}>Logo</h1>
      <input
        type='text'
        placeholder='Search...'
        onChange={(e) => console.log(e.target.value)}
        className={styles.header__search}
      />
      <AccountCircleIcon />
    </div>
  );
};

export default Header;
