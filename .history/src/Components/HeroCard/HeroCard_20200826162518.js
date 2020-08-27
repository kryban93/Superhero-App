import React, from 'react';
import './HeroCard.scss';

const HeroCard = ({ powerstats, name, imgUrl, id }) => {
  return (
    <div>
      <h2>{name} </h2>
      <img url='imgUrl' alt={name} />
    </div>
  );
};

export default HeroCard;
