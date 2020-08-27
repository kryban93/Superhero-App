import React, { useState, useEffect } from 'react';
import './SearchView.scss';
import { searchHeroByName } from '../../requests';
import { useParams } from 'react-router-dom';
import HeroCard from '../HeroCard/HeroCard';
import Loader from '../Loader/Loader';

const SearchView = () => {
  const [searchList, setSearchList] = useState([]);
  const [isLoading,setLoadingState] = useState(true);

  const { name } = useParams();

  useEffect(() => {
    setLoadingState(true);
    searchHeroByName(name).then((searchResults) => {
      const { data } = searchResults;

      if (data.error) {
        return;
      }
      const { results } = data;

      console.log(results);
      setSearchList(results);
      setLoadingState(false);
    });
  }, [name]);

  return (
    <section className='container'>
      {!isLoading && searchList.map(({ powerstats, name, image, id }) => (
        <HeroCard powerstats={powerstats} name={name} imgUrl={image.url} key={id} />
      ))}
      { isLoading && <Loader /}
    </section>
  );
};

export default SearchView;
