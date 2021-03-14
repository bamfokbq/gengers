import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-section'>
          <h4>Footer</h4>
          <h4>Footer</h4>
          <h4>Footer</h4>
          <h4>Footer</h4>
          <h4>Footer</h4>
        </div>
        <div className='footer-section'>
          <h4>Footer</h4>
          <h4>Footer</h4>
          <h4>Footer</h4>
          <h4>Footer</h4>
          <h4>Footer</h4>
        </div>
        <div className='footer-section'>
          <h4>Footer</h4>
          <h4>Footer</h4>
          <h4>Footer</h4>
          <h4>Footer</h4>
          <h4>Footer</h4>
        </div>
      </div>
      <div className='footer-date'>
        <p>Developed By KBQ @ {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
