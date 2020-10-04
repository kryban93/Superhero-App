import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <p>
          Data obtained from the{' '}
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.superheroapi.com/'
            style={{ textDecoration: 'none', color: '#ff6804' }}
          >
            Superhero Api
          </a>
          .
        </p>
        <p>If You have any questions Contact me by @</p>
      </div>
    </footer>
  );
};

export default Footer;
