import React, { useState, useEffect } from 'react';
import './SearchView.scss';
import { searchHeroByName } from '../../requests';
import { useParams } from 'react-router-dom';

const SearchView = () => {
  const [searchList, setSearchList] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    searchHeroByName(name).then((searchResults) => {
      const { data } = searchResults;

      if (data.error) {
        return;
      }
      const { results } = data;

      console.log(results);
      setSearchList(results);
    });
  }, [name]);

  return <section className='container'>{searchList.map({ powerstats, name, imgUrl, id })}</section>;
};

export default SearchView;
