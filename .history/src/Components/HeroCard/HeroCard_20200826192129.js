import React from 'react';
import './HeroCard.scss';

const HeroCard = ({ powerstats, name, imgUrl, id }) => {
  return (
    <div className='card'>
      <h2 className='card__name'>{name} </h2>
      <img className='card__image' src={imgUrl} alt={name} width='200px' />
      <div className='card__stats'>
        <div className='card__stats__item'>
          <p>{powerstats.combat}</p>
        </div>
        <div className='card__stats__item'>
          <p>{powerstats.intelligence}</p>
        </div>
        <div className='card__stats__item'>
          <p>{powerstats.strength}</p>
        </div>
        <div className='card__stats__item'>
          <p>{powerstats.speed}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
