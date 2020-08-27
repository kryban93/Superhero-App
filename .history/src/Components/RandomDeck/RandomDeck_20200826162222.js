import React, { useEffect } from 'react';
import './RandomDeck.scss';
import { getBasicHeroInfoById } from '../../requests';

let randomHeroesNumbers = [];

const randomInteger = () => {
  // 731 - number of last hero
  return Math.floor(Math.random() * (731 - 1 + 1)) + 1;
};

const randomizeHeroes = () => {
  for (let i = 0; i <= 5; i++) {
    const heroId = randomInteger();
    randomHeroesNumbers.push(heroId);
  }
};

const RandomDeck = () => {
  useEffect(() => {
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
  };
  return <section></section>;
};

export default RandomDeck;