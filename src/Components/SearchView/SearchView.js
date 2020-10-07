import React, { useState, useEffect } from 'react';
import './SearchView.scss';
import { searchHeroByName } from '../../requests';
import { useParams } from 'react-router-dom';
import HeroCard from '../HeroCard/HeroCard';
import Loader from '../Loader/Loader';
import superHeroesImage from '../../assets/images/superheroes.png';

const SearchView = () => {
  const [searchList, setSearchList] = useState([]);
  const [isLoading, setLoadingState] = useState(true);
  const [wrongSearchInput, setWrongSearchInputState] = useState(false);

  const { name } = useParams();

  useEffect(() => {
    setLoadingState(true);
    searchHeroByName(name).then((searchResults) => {
      const { data } = searchResults;

      if (data.error) {
        setWrongSearchInputState(true);
        return;
      }
      const { results } = data;

      console.log(results);
      setSearchList(results);
      setLoadingState(false);
      setWrongSearchInputState(false);
    });
  }, [name]);

  return (
    <section>
      <div className='search'>
        <h1 className='search__title'>Search results for phrase '{name}'</h1>
        {wrongSearchInput && (
          <div className='search__wrong'>
            <h1 className='search__wrong__title'>There's no results for such phrase!</h1>
            <img className='search__wrong__image' src={superHeroesImage} alt='Teen Titans' />
          </div>
        )}
        <div className='search__content'>
          {!isLoading &&
            searchList.map(({ powerstats, name, image, id }) => (
              <HeroCard powerstats={powerstats} name={name} imgUrl={image.url} key={id} id={id} />
            ))}
        </div>
      </div>
      {isLoading && <Loader />}
    </section>
  );
};

export default SearchView;
