import React, { useEffect } from 'react';
import './CompareCard.scss';

const CompareCard = ({ compareHeroesArray }) => {
  useEffect(() => {
    const displayCompareHeroesCard = () => {
      console.log(compareHeroesArray);
    };
    displayCompareHeroesCard();
  }, [compareHeroesArray]);

  return (
    <div className='compare__card__wrapper'>
      {compareHeroesArray.map(({ heroName, powerstats, imageUrl, biography, appearance, heroId }) => (
        <div className='compare__card' key={heroId}>
          <img src={imageUrl} alt={`${heroName} portrait`} className='compare__card__img' />
          <h3 className='compare__card__title'> {heroName}</h3>
          <h4 className='compare__card__title--name'>Full Name: {biography['full-name']}</h4>
          <h4 className='compare__card__title--alignment'>Alignment: {biography['alignment']}</h4>
          <div className='compare__card__list'>
            {Object.keys(powerstats).map((keyName) => (
              <div key={keyName} className='compare__card__list__item'>
                <h4 className='compare__card__list__item__name'>{keyName}</h4>
                <p className='compare__card__list__item__value'>{powerstats[keyName]}</p>
              </div>
            ))}
          </div>
          <div className='compare__card__list'>
            {Object.keys(appearance).map((keyName) => (
              <div key={keyName} className='compare__card__list__item'>
                <h4 className='compare__card__list__item__name'>{keyName}</h4>
                <p className='compare__card__list__item__value'>{appearance[keyName]}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompareCard;
