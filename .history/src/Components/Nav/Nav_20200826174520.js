import React, { useState } from 'react';
import './Nav.scss';
import logo from '../../assets/logo/logo.svg';
import * as icons from '../../assets/icons/index';

const Nav = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  return (
    <nav className='nav'>
      <img src={logo} alt='logo' className='nav__logo' />
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
        <div>
          <img src={icons.chart_white} alt='icon' />
        </div>
        <div>
          <img src={icons.chart_white} alt='icon' />
        </div>
        <div>
          <img src={icons.chart_white} alt='icon' />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
