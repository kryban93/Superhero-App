import React, { useEffect, useState } from 'react';
import { getBasicHeroInfoById } from '../../requests';
import HeroCard from '../HeroCard/HeroCard';
import './RandomDeck.scss';
import Loader from '../Loader/Loader';

let randomHeroesNumbers = [];

const randomInteger = () => {
  // 731 - number of last hero
  return Math.floor(Math.random() * (731 - 1 + 1)) + 1;
};

const randomizeHeroes = () => {
  for (let i = 0; i <= 4; i++) {
    const heroId = randomInteger();
    randomHeroesNumbers.push(heroId);
  }
};

const RandomDeck = () => {
  const [randomHeroesList, setRandomHeroesList] = useState([]);
  const [isLoading, setLoadingState] = useState(true);

  useEffect(() => {
    setLoadingState(true);
    fetchAndRenderRandomHeroes();

    return () => {
      setRandomHeroesList([]);
    };
  }, []);

  const fetchAndRenderRandomHeroes = async () => {
    randomHeroesNumbers = [];
    randomizeHeroes();
    const heroes = [];
    for (const heroId of randomHeroesNumbers) {
      const hero = await getBasicHeroInfoById(heroId);
      heroes.push(hero);
    }

    setRandomHeroesList(heroes);
    setLoadingState(false);
  };

  const handleClick = () => {
    setRandomHeroesList([]);
    setLoadingState(true);
    fetchAndRenderRandomHeroes();
  };

  return (
    <section className='random'>
      <div className='random__header'>
        <h1 className='random__header__title'>Your random deck</h1>
        <button className='random__header__btn' onClick={handleClick}>
          draw new deck
        </button>
      </div>

      {isLoading && <Loader />}

      <div className='random__content'>
        {!isLoading &&
          randomHeroesList.map(({ name, powerstats, imgUrl, id }) => (
            <HeroCard key={id} name={name} imgUrl={imgUrl} powerstats={powerstats} id={id} />
          ))}
      </div>
    </section>
  );
};

export default RandomDeck;
