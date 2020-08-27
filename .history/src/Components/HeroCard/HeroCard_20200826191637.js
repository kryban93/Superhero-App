import React from 'react';
import './HeroCard.scss';

const HeroCard = ({ powerstats, name, imgUrl, id }) => {
  return (
    <div className='card'>
      <h2 className='card__name'>{name} </h2>
      <img className='card__image' src={imgUrl} alt={name} width='200px' />
      <div className='card__stats'>
        <div className='card__stats__item'>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
