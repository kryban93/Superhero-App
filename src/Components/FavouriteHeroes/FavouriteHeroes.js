import React, { useContext, useEffect, useState } from 'react';
import './FavouriteHeroes.scss';
import { getBasicHeroInfoById } from '../../requests';
import HeroCard from '../HeroCard/HeroCard';
import Loader from '../Loader/Loader';
import { FavouriteHeroesContext } from '../FavouriteHeroesContext/FavouriteHeroesContext';

const FavouriteHeroes = () => {
  const [FavouriteHeroesList, setFavouriteHeroesList] = useState([]);
  const [isLoading, setLoadingState] = useState([]);
  const [favouriteHeroesIds, setFavouriteHeroesIds] = useContext(FavouriteHeroesContext);

  useEffect(() => {
    setLoadingState(true);

    const fetchAndRenderFavouriteHeroes = async () => {
      const heroes = [];
      for (const heroId of favouriteHeroesIds) {
        const hero = await getBasicHeroInfoById(heroId);
        heroes.push(hero);
      }
      setFavouriteHeroesList(heroes);
      setLoadingState(false);
    };

    fetchAndRenderFavouriteHeroes();
    return () => {
      setFavouriteHeroesList([]);
    };
  }, [favouriteHeroesIds]);

  return (
    <section className='favourite'>
      <h1 className='favourite__title'>Your favourite heroes</h1>
      <button className='favourite__btn' onClick={() => setFavouriteHeroesIds([])}>
        clear list
      </button>
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
