import React from 'react';
import './RandomDeck.scss';
import { getBasicHeroInfoById } from '../../requests';

const randomHeroesNumbers = [];

const randomInteger = () => {
  // 731 - number of last hero
  return Math.floor(Math.random() * (731 - 1 + 1)) + 1;
};

const





const RandomDeck = () => {
  return <section></section>;
};

export default RandomDeck;
