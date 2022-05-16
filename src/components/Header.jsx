import React from 'react';
import HeaderCSS from './css/Header.module.css';

const Header = () => {
  return (
    <div className={HeaderCSS.container}>
        <h1 className={HeaderCSS.title}>Weather forecast</h1>
    </div>
  )
}

export default Header