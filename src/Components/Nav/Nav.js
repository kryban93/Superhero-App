import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Nav.scss';
import logo from '../../assets/logo/logo.svg';
import * as icons from '../../assets/icons/index';

const Nav = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  return (
    <nav className='nav'>
      <Link to='/'>
        <img src={logo} alt='logo' className='nav__logo' />
      </Link>
      <div className='nav__search'>
        <input
          className='nav__search__input'
          type='text'
          onChange={(event) => {
            setSearchInputValue(event.target.value);
          }}
          value={searchInputValue}
          name='search'
          aria-label='search input'
        />
        <Link style={{ textDecoration: 'none' }} to={`/search/${searchInputValue}`}>
          <button className='nav__search__button'>
            <span>search</span>
            <img src={icons.search_dark} alt='search icon' />
          </button>
        </Link>
      </div>
      <div className='nav__menu'>
        <NavLink activeClassName='nav__menu__item--active' style={{ textDecoration: 'none' }} exact to='/'>
          <div className='nav__menu__item'>
            <img src={icons.home_dark} alt='icon' className='nav__menu__item__icon' />
            <p className='nav__menu__item__text'>home</p>
          </div>
        </NavLink>
        <NavLink activeClassName='nav__menu__item--active' style={{ textDecoration: 'none' }} to='/favourite'>
          <div className='nav__menu__item'>
            <img src={icons.star_dark} alt='icon' className='nav__menu__item__icon' />
            <p className='nav__menu__item__text'>favourite</p>
          </div>
        </NavLink>
        <NavLink activeClassName='nav__menu__item--active' style={{ textDecoration: 'none' }} to='/compare'>
          <div className='nav__menu__item'>
            <img src={icons.file_dark} alt='icon' className='nav__menu__item__icon' />
            <p className='nav__menu__item__text'>compare</p>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
