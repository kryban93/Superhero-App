import React, { useEffect, useState } from 'react';
import './HeroCard.scss';
import HeroDetailed from '../HeroDetailed/HeroDetailed';
import { star_green, star_red } from '../../assets/icons/index';

const HeroCard = ({ powerstats, name, imgUrl, id }) => {
  const [isModalActive, setModalState] = useState(false);
  const [isFavourite, setFavouriteState] = useState(false);

  useEffect(() => {
    let favouriteHeroesIdsArray = JSON.parse(localStorage.getItem('favouriteHeroesIdsArray'));
    favouriteHeroesIdsArray.indexOf(id) !== -1 ? setFavouriteState(true) : setFavouriteState(false);
  }, [id]);

  const hideModal = (e) => {
    e.stopPropagation();
    setModalState(false);
  };

  const addToFavourite = (e) => {
    e.stopPropagation();

    let favouriteHeroesIdsArray = JSON.parse(localStorage.getItem('favouriteHeroesIdsArray')) || [];

    if (favouriteHeroesIdsArray.indexOf(id) !== -1) {
      return;
    } else {
      favouriteHeroesIdsArray.push(id);
    }

    localStorage.setItem('favouriteHeroesIdsArray', JSON.stringify(favouriteHeroesIdsArray));
    setFavouriteState(true);
  };

  const deleteFromFavourite = (e) => {
    e.stopPropagation();

    let favouriteHeroesIdsArray = JSON.parse(localStorage.getItem('favouriteHeroesIdsArray')) || [];

    localStorage.removeItem('favouriteHeroesIdsArray');

    const filteredFavouriteHeroesIdsArray = favouriteHeroesIdsArray.filter((item) => item !== id);
    localStorage.setItem('favouriteHeroesIdsArray', JSON.stringify(filteredFavouriteHeroesIdsArray));
    setFavouriteState(false);
  };

  return (
    <>
      <div className='card' onClick={() => setModalState(true)}>
        {!isFavourite && (
          <button className='card__btn card__btn--favourite' onClick={addToFavourite}>
            <img src={star_green} className='card__btn__img' alt='add to favourite button' />
          </button>
        )}
        {isFavourite && (
          <button className='card__btn card__btn--favourite' onClick={deleteFromFavourite}>
            <img src={star_red} className='card__btn__img' alt='add to favourite button' />
          </button>
        )}
        <h2 className='card__name'>{name} </h2>
        <img className='card__image' src={imgUrl} alt={name} />
        <div className='card__stats'>
          <div className='card__stats__item' key='combat'>
            <span className='card__stats__item__description'>combat</span>
            <p>{powerstats['combat']}</p>
          </div>
          <div className='card__stats__item' key='intelligence'>
            <span className='card__stats__item__description'>intelligence</span>
            <p>{powerstats['intelligence']}</p>
          </div>
          <div className='card__stats__item' key='speed'>
            <span className='card__stats__item__description'>speed</span>
            <p>{powerstats['speed']}</p>
          </div>
          <div className='card__stats__item' key='durabillity'>
            <span className='card__stats__item__description'>durabillity</span>
            <p>{powerstats['durabillity']}</p>
          </div>
          <div className='card__stats__item' key='power'>
            <span className='card__stats__item__description'>power</span>
            <p>{powerstats['power']}</p>
          </div>
          <div className='card__stats__item' key='strength'>
            <span className='card__stats__item__description'>strength</span>
            <p>{powerstats['strength']}</p>
          </div>
        </div>
      </div>

      {isModalActive && (
        <HeroDetailed
          hideModal={hideModal}
          id={id}
          addToFavourite={addToFavourite}
          deleteFromFavourite={deleteFromFavourite}
          isFavourite={isFavourite}
        />
      )}
    </>
  );
};

export default HeroCard;
