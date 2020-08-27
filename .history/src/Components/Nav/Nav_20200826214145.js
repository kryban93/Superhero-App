import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import logo from '../../assets/logo/logo.svg';
import * as icons from '../../assets/icons/index';

const Nav = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  return (
    <nav className='nav'>
      <Link>
        <img src={logo} alt='logo' className='nav__logo' />
      </Link>
      <div className='nav__search'>
        <input
          type='text'
          onChange={(event) => {
            setSearchInputValue(event.target.value);
          }}
          value={searchInputValue}
          name='search'
        />
        <button>search</button>
      </div>
      <div className='nav__menu'>
        <div className='nav__menu__item'>
          <img src={icons.home_white} alt='icon' className='nav__menu__icon' />
          <p>home</p>
        </div>
        <div className='nav__menu__item'>
          <img src={icons.star_white} alt='icon' className='nav__menu__icon' />
          <p>favourite</p>
        </div>
        <div className='nav__menu__item'>
          <img src={icons.file_white} alt='icon' className='nav__menu__icon' />
          <p>compare</p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
