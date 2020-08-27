import React from 'react';
import './Nav.scss';
import logo from '../../assets/logo/logo.svg';

const Nav = () => {
  return (
    <nav>
      <img src={logo} alt='logo' />
      <ul>
        <li>Home</li>
        <li>Search</li>
        <li>Featured</li>
      </ul>
    </nav>
  );
};

export default Nav;
