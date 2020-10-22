import React, { useState, useEffect } from 'react';
import './HeroDetailed.scss';
import { getDetailedInfoById } from '../../requests';
import Loader from '../Loader/Loader';
import { close_dark, star_green, star_red } from '../../assets/icons/index';

const HeroDetailed = ({ id, hideModal, addToFavourite, deleteFromFavourite, isFavourite }) => {
  const [detailedHeroInfo, setDetailedHeroInfo] = useState([]);
  const [isLoading, setLoadingState] = useState(true);

  useEffect(() => {
    setLoadingState(true);
    getDetailedInfoById(id).then((searchResults) => {
      const { data } = searchResults;
      if (data.error) {
        return;
      }

      const results = data;

      setDetailedHeroInfo(results);
      setLoadingState(false);
    });
  }, [id]);

  return (
    <section className='wrapper'>
      {!isLoading && (
        <div className='detailed'>
          <button onClick={hideModal} className='detailed__btn detailed__btn--close'>
            <img src={close_dark} alt='close button' />
          </button>
          {!isFavourite && (
            <button className='detailed__btn detailed__btn--favourite' onClick={addToFavourite}>
              <img src={star_green} className='card__btn__img' alt='add to favourite button' />
            </button>
          )}
          {isFavourite && (
            <button
              className='detailed__btn detailed__btn--favourite'
              onClick={deleteFromFavourite}
            >
              <img src={star_red} className='card__btn__img' alt='add to favourite button' />
            </button>
          )}
          <img
            src={detailedHeroInfo.image.url}
            alt={`${detailedHeroInfo.name} portrait`}
            className='detailed__image'
          />
          <div className='detailed__description'>
            <h2 className='detailed__name'> {detailedHeroInfo.name}</h2>
            <div className='detailed__stats'>
              <div className='detailed__group'>
                <h3 className='detailed__group__name'> Powerstats</h3>
                <div className='detailed__group__list--grid'>
                  {Object.keys(detailedHeroInfo.powerstats).map((keyName) => (
                    <div key={keyName} className='detailed__group__list__item'>
                      <h4 className='detailed__group__list__item__name'>{keyName}</h4>
                      <p className='detailed__group__list__item__value'>
                        {detailedHeroInfo.powerstats[keyName]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className='detailed__group'>
                <h3 className='detailed__group__name'>Appearance</h3>
                <div className='detailed__group__list--grid'>
                  {Object.keys(detailedHeroInfo.appearance).map((keyName) =>
                    keyName === 'weight' ? (
                      <div key={keyName} className='detailed__group__list__item'>
                        <h4 className='detailed__group__list__item__name'>{keyName}</h4>
                        <p className='detailed__group__list__item__value'>
                          {detailedHeroInfo.appearance[keyName][1]}
                        </p>
                      </div>
                    ) : (
                      <div key={keyName} className='detailed__group__list__item'>
                        <h4 className='detailed__group__list__item__name'>{keyName}</h4>
                        <p className='detailed__group__list__item__value'>
                          {detailedHeroInfo.appearance[keyName]}
                        </p>
                      </div>
                    )
                  )}
                </div>

                <div className='detailed__group'>
                  <h3 className='detailed__group__name'>Biography</h3>
                  {Object.keys(detailedHeroInfo.biography).map((keyName) =>
                    keyName === 'aliases' ? (
                      <div key={keyName} className='detailed__group__list__item'>
                        <h4 className='detailed__group__list__item__name'>{keyName}</h4>
                        <p className='detailed__group__list__item__value'>
                          {detailedHeroInfo.biography[keyName].map((item) => `${item}, `)}
                        </p>
                      </div>
                    ) : (
                      <div key={keyName} className='detailed__group__list__item'>
                        <h4 className='detailed__group__list__item__name'>{keyName}</h4>
                        <p className='detailed__group__list__item__value'>
                          {detailedHeroInfo.biography[keyName]}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isLoading && <Loader />}
    </section>
  );
};

export default HeroDetailed;
