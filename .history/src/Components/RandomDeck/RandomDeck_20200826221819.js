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
  const [isLoading, setLoadingState] = useState([true]);

  useEffect(() => {
    setLoadingState(true);
    fetchAndRenderRandomHeroes();
  }, []);

  const fetchAndRenderRandomHeroes = async () => {
    randomHeroesNumbers = [];
    randomizeHeroes();
    const heroes = [];
    for (const heroId of randomHeroesNumbers) {
      const hero = await getBasicHeroInfoById(heroId);
      heroes.push(hero);
    }
    console.log(heroes);
    setRandomHeroesList(heroes);
    setLoadingState(false);
  };
  return (
    <section className='container'>
      {!isLoading &&
        randomHeroesList.map(({ name, powerstats, imgUrl, id }) => (
          <HeroCard key={id} name={name} imgUrl={imgUrl} powerstats={powerstats} />
        ))}
      {isLoading && <Loader />}
    </section>
  );
};

export default RandomDeck;
