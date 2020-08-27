import React, { useState, useEffect } from 'react';
import './SearchView.scss';
import { searchHeroByName } from '../../requests';
import { useParams } from 'react-router-dom';

const SearchView = () => {
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    searchHeroByName(name).then((searchResults) => {
      const { data } = searchResults;

      const { name } = useParams;

      if (data.error) {
        return;
      }
      const { results } = data;

      console.log(results);
    });
  }, []);

  return <section className='container'></section>;
};

export default SearchView;
