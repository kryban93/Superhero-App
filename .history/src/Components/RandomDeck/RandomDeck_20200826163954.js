import React, { useEffect, useState } from 'react';
import { getBasicHeroInfoById } from '../../requests';
import HeroCard from '../HeroCard/HeroCard';

import './RandomDeck.scss';

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
  useEffect(() => {
    fetchAndRenderRandomHeroes();
  }, []);

  const [randomHeroesList, setRandomHeroesList] = useState([]);

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
  };
  return (
    <section>
      {randomizeHeroes.map(({ name, powerstats, imgUrl, id }) => (
        <HeroCard key={id} name={name} imgUrl={imgUrl} powerstats={powerstats} />
      ))}
    </section>
  );
};

export default RandomDeck;
