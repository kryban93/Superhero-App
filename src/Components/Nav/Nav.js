import React, { useEffect, useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useWindowDimensions from '../../Hooks/useWindowDimensions';
import './Nav.scss';
import logo from '../../assets/logo/logo.svg';
import * as icons from '../../assets/icons/index';

const Nav = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [showMenuState, setShowMenuState] = useState(true);
  const { width } = useWindowDimensions();
  const navMenuRef = useRef();

  useEffect(() => {
    width > 1024 ? setShowMenuState(true) : setShowMenuState(false);
  }, [width]);

  const showMenu = () => {
    setShowMenuState(true);
    const wrapper = navMenuRef.current;
    wrapper.classList.add('nav__menu--open');
  };

  const hideMenu = () => {
    setShowMenuState(false);
    const wrapper = navMenuRef.current;
    wrapper.classList.remove('nav__menu--open');
  };
  return (
    <nav className='nav'>
      <div className='nav__wrapper'>
        <Link to='/'>
          <img src={logo} alt='logo' className='nav__logo' />
        </Link>
        <div className='nav__search'>
          <input
            id='searchInput'
            className='nav__search__input'
            type='text'
            onChange={(event) => {
              setSearchInputValue(event.target.value);
            }}
            value={searchInputValue}
            name='search'
            aria-label='navigation search input'
          />
          <label className='nav__search__label' htmlFor='searchInput'>
            search hero
          </label>
          <Link style={{ textDecoration: 'none' }} to={`/search/${searchInputValue}`}>
            <button
              className='nav__search__button'
              onClick={() => {
                setSearchInputValue('');
              }}
            >
              search
            </button>
          </Link>
        </div>
        {!showMenuState && (
          <button className='nav__menu__btn nav__menu__btn--open' onClick={showMenu}>
            <img src={icons.menu_white} alt='open menu bar' className='nav__menu__btn__img' />
          </button>
        )}

        <div className='nav__menu' ref={navMenuRef}>
          {showMenuState && (
            <button className='nav__menu__btn nav__menu__btn--close' onClick={hideMenu}>
              <img src={icons.close_white} className='nav__menu__btn__img' alt='close menu bar' />
            </button>
          )}
          <NavLink activeClassName='nav__menu__item--active' style={{ textDecoration: 'none' }} exact to='/'>
            <div className='nav__menu__item'>
              <img src={icons.home_white} alt='add to favourite button' />
              <h3 className='nav__menu__item__text'>home</h3>
            </div>
          </NavLink>
          <NavLink activeClassName='nav__menu__item--active' style={{ textDecoration: 'none' }} to='/favourite'>
            <div className='nav__menu__item'>
              <img src={icons.star_white} alt='add to favourite button' />
              <h3 className='nav__menu__item__text'>favourite</h3>
            </div>
          </NavLink>
          <NavLink activeClassName='nav__menu__item--active' style={{ textDecoration: 'none' }} to='/compare'>
            <div className='nav__menu__item'>
              <img src={icons.chart_white} alt='add to favourite button' />
              <h3 className='nav__menu__item__text'>compare</h3>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
