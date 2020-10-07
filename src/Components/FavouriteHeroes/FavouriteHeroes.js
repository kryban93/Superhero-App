import React, { useEffect, useState } from 'react';
import './FavouriteHeroes.scss';
import { getBasicHeroInfoById } from '../../requests';
import HeroCard from '../HeroCard/HeroCard';
import Loader from '../Loader/Loader';

const FavouriteHeroesNumber = [60, 370, 204];

const FavouriteHeroes = () => {
  const [FavouriteHeroesList, setFavouriteHeroesList] = useState([]);
  const [isLoading, setLoadingState] = useState([]);

  useEffect(() => {
    setLoadingState(true);
    fetchAndRenderFavouriteHeroes();

    return () => {
      setFavouriteHeroesList([]);
    };
  }, []);

  const fetchAndRenderFavouriteHeroes = async () => {
    const heroes = [];
    for (const heroId of FavouriteHeroesNumber) {
      const hero = await getBasicHeroInfoById(heroId);
      heroes.push(hero);
    }
    setFavouriteHeroesList(heroes);
    setLoadingState(false);
  };

  return (
    <section className='favourite'>
      <h1 className='favourite__title'>Your favourite heroes</h1>
      <div className='favourite__content'>
        {!isLoading &&
          FavouriteHeroesList.map(({ name, powerstats, imgUrl, id }) => (
            <HeroCard key={id} name={name} imgUrl={imgUrl} powerstats={powerstats} id={id} />
          ))}
      </div>

      {isLoading && <Loader />}
    </section>
  );
};

export default FavouriteHeroes;
