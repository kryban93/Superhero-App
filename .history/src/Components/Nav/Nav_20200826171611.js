import React from 'react';
import './Nav.scss';
import logo from '../../assets/logo/logo.svg';

const Nav = () => {
  return (
    <nav className='nav'>
      <img src={logo} alt='logo' className='nav__logo' />
      <div className='nav__menu'></div>
    </nav>
  );
};

export default Nav;
