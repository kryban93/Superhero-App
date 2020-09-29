import React, { useEffect, useState } from 'react';
import './HeroCard.scss';
import HeroDetailed from '../HeroDetailed/HeroDetailed';
import { star_dark } from '../../assets/icons/index';

const HeroCard = ({ powerstats, name, imgUrl, id }) => {
  const [isModalActive, setModalState] = useState(false);
  const [favouriteArray, setFavouriteArray] = useState([]);
  useEffect(() => {
    console.log(id);
  }, [id]);

  const showModal = (e) => {
    setModalState(true);
  };

  const hideModal = (e) => {
    e.stopPropagation();
    setModalState(false);
  };

  const addToFavourite = (e) => {
    e.stopPropagation();
    console.log('clicked');
    setFavouriteArray([...favouriteArray, id]);
  };

  return (
    <>
      <div className='card' onClick={() => showModal()}>
        <h2 className='card__name'>{name} </h2>
        <button className='card__button--favourite' onClick={addToFavourite}>
          <img src={star_dark} alt='add to favourite button' />
        </button>

        <img className='card__image' src={imgUrl} alt={name} width='200px' />

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

      {isModalActive && <HeroDetailed hideModal={hideModal} id={id} addToFavourite={addToFavourite} />}
    </>
  );
};

export default HeroCard;
