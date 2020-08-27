import React from 'react';
import './HeroCard.scss';

const HeroCard = ({ powerstats, name, imgUrl, id }) => {
  return (
    <div>
      <h2>{name} </h2>
      <img src={imgUrl} alt={name} width='200px' />
    </div>
  );
};

export default HeroCard;
