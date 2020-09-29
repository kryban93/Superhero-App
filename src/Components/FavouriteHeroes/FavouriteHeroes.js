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
    <section className='container'>
      {!isLoading &&
        FavouriteHeroesList.map(({ name, powerstats, imgUrl, id }) => (
          <HeroCard key={id} name={name} imgUrl={imgUrl} powerstats={powerstats} id={id} />
        ))}

      {isLoading && <Loader />}
    </section>
  );
};

export default FavouriteHeroes;
