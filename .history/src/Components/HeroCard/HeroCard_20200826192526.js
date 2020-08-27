import React from 'react';
import './HeroCard.scss';

const HeroCard = ({ powerstats, name, imgUrl, id }) => {
  return (
    <div className='card'>
      <h2 className='card__name'>{name} </h2>
      <img className='card__image' src={imgUrl} alt={name} width='200px' />
      <div className='card__stats'>
        <div className='card__stats__item'>
          <span>combat</span>
          <p>{powerstats.combat}</p>
        </div>
        <div className='card__stats__item'>
          <span>int</span>
          <p>{powerstats.intelligence}</p>
        </div>
        <div className='card__stats__item'>
          <span>str</span>
          <p>{powerstats.strength}</p>
        </div>
        <div className='card__stats__item'>
          <span>speed</span>
          <p>{powerstats.speed}</p>
        </div>
        <div className='card__stats__item'>
          <span>power</span>
          <p>{powerstats.power}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
