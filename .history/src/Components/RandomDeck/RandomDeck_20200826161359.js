import React from 'react';
import './RandomDeck.scss';
import { getBasicHeroInfoById } from '../../requests';

const randomHeroesNumbers = [];

const randomInteger = () => {
  // 731 - number of last hero
  return Math.floor(Math.random() * (731 - 1 + 1)) + 1;
};

const randomizeHeroes = () => {
    for (let i = 0; i <= 5; i++) {
        const heroId = randomInteger();
        randomHeroesNumbers.push(heroId)
    }
}

const RandomDeck = () => {
    const fetchAndRenderRandomHeroes = async () => {
        const heroes = [];
        for (const heroId of randomHeroesNumbers)
    }
  return <section></section>;
};

export default RandomDeck;
