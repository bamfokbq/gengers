import React from 'react';
import MenuIcon from '../utilities/MenuIcon/MenuIcon';
import './Header.css';
import Navigation from './Navigation/Navigation';

const Header = () => {
  return (
    <header className='header'>
      <MenuIcon />
      <Navigation />
    </header>
  );
};

export default Header;
