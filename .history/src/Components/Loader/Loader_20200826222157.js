import React from 'react';
import './Loader.scss';
import logo from '../../assets/logo/logo.svg';

const Loader = () => {
  return (
    <div className='loader__container'>
      <img className='loader__image' src={logo} alt='loader with logo' />
    </div>
  );
};

export default Loader;
