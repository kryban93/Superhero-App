import React, { useState, useEffect } from 'react';
import './SearchView.scss';
import { searchHeroByName } from '../../requests';

const SearchView = () => {
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    searchHeroByName(name).then((searchResults) => {
      const { data } = searchResults;

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
