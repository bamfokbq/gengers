import React from 'react';
import './Button.css';

const Button = ({ bgColor, name }) => {
  return <button className={bgColor}>{name}</button>;
};

export default Button;
