import React, { useEffect } from 'react';
import './HeroCard.scss';
import { Link } from 'react-router-dom';

const HeroCard = ({ powerstats, name, imgUrl, id }) => {
  useEffect(() => {
    console.log(id);
  }, [id]);

  return (
    <div className='card'>
      <h2 className='card__name'>{name} </h2>
      <Link
        to={{
          pathname: `/detailed/${id}`,
          state: { modal: true },
        }}
      >
        <img className='card__image' src={imgUrl} alt={name} width='200px' />
      </Link>
      <div className='card__stats'>
        <div className='card__stats__item'>
          <span className='card__stats__item__description'>combat</span>
          <p>{powerstats.combat}</p>
        </div>
        <div className='card__stats__item'>
          <span className='card__stats__item__description'>intelligence</span>
          <p>{powerstats.intelligence}</p>
        </div>
        <div className='card__stats__item'>
          <span className='card__stats__item__description'>strength</span>
          <p>{powerstats.strength}</p>
        </div>
        <div className='card__stats__item'>
          <span className='card__stats__item__description'>speed</span>
          <p>{powerstats.speed}</p>
        </div>
        <div className='card__stats__item'>
          <span className='card__stats__item__description'>power</span>
          <p>{powerstats.power}</p>
        </div>
        <div className='card__stats__item'>
          <span className='card__stats__item__description'>durability</span>
          <p>{powerstats.durability}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
