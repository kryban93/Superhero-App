import React, { useState, useEffect } from 'react';
import './HeroDetailed.scss';
import { getDetailedInfoById } from '../../requests';
import Loader from '../Loader/Loader';
import { close_dark } from '../../assets/icons/index';

const HeroDetailed = ({ id, hideModal }) => {
  const [detailedHeroInfo, setDetailedHeroInfo] = useState([]);
  const [isLoading, setLoadingState] = useState(true);

  useEffect(() => {
    console.log(id);
    setLoadingState(true);
    getDetailedInfoById(id).then((searchResults) => {
      const { data } = searchResults;
      if (data.error) {
        return;
      }

      const results = data;
      console.log(results);
      setDetailedHeroInfo(results);
      setLoadingState(false);
    });
  }, [id]);

  return (
    <section className='wrapper' onClick={hideModal}>
      {!isLoading && (
        <div className='detailed'>
          <button onClick={hideModal} className='detailed__button'>
            <img src={close_dark} alt='close button' height='40px' />
          </button>
          <img src={detailedHeroInfo.image.url} alt={`${detailedHeroInfo.name} portrait`} className='detailed__image' />
          <div className='detailed__description'>
            <h2 className='detailed__name'> {detailedHeroInfo.name}</h2>
            <div className='detailed__stats'>
              <div className='detailed__group'>
                <h3> Powerstats</h3>
                <div className='detailed__group__list--grid'>
                  {Object.keys(detailedHeroInfo.powerstats).map((keyName) => (
                    <div key={keyName} className='detailed__group__list__item'>
                      <h4>{keyName}</h4>
                      <p>{detailedHeroInfo.powerstats[keyName]}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className='detailed__group'>
                <h3>Appearance</h3>
                <div className='detailed__group__list--grid'>
                  {Object.keys(detailedHeroInfo.appearance).map((keyName) => (
                    <div key={keyName} className='detailed__group__list__item'>
                      <h4>{keyName}</h4>
                      <p>{detailedHeroInfo.appearance[keyName]}</p>
                    </div>
                  ))}
                </div>

                <div className='detailed__group'>
                  <h3>Biography</h3>
                  {Object.keys(detailedHeroInfo.biography).map((keyName) => (
                    <div key={keyName} className='detailed__group__list__item'>
                      <h4>{keyName}</h4>
                      <p>{detailedHeroInfo.biography[keyName]}</p>
                    </div>
                  ))}
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
