import React from 'react';
import './ListItem.scss';

const ListItem = ({ heroId, heroName, heroFullName, imageUrl, addToCompareList, deleteFromCompareHeroList }) => {
  return (
    <li className='item'>
      <div className='item__content'>
        <img src={imageUrl} alt={heroName} className='item__content__image' />
        <div style={{ textAlign: 'center' }}>
          <h3 className='item__content__text item__content__text--main'>{heroName}</h3>
          <h4 className='item__content__text item__content__text--description'>{heroFullName}</h4>
        </div>
        {addToCompareList && (
          <button
            data-id={heroId}
            onClick={addToCompareList}
            className='item__content__button item__content__button--add'
          >
            add
          </button>
        )}
        {deleteFromCompareHeroList && (
          <button
            data-id={heroId}
            onClick={deleteFromCompareHeroList}
            className='item__content__button item__content__button--delete'
          >
            delete
          </button>
        )}
      </div>
    </li>
  );
};

export default ListItem;
