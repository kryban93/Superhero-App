import React from 'react';
import './ListItem.scss';

const ListItem = ({ heroId, heroName, heroFullName, imageUrl, addToCompareList, deleteFromCompareHeroList }) => {
  return (
    <li className='item__wrapper'>
      <div className='item'>
        <img src={imageUrl} alt={heroName} className='item__image' />
        <h3 className='item__text'>
          {heroName}
          <br />
          {heroFullName}
        </h3>
        {addToCompareList && (
          <button data-id={heroId} onClick={addToCompareList} className='item__button item__button--add'>
            add
          </button>
        )}
        {deleteFromCompareHeroList && (
          <button data-id={heroId} onClick={deleteFromCompareHeroList} className='item__button item__button--delete'>
            delete
          </button>
        )}
      </div>
    </li>
  );
};

export default ListItem;
