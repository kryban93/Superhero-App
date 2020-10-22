import React, { useState, createContext } from 'react';

export const FavouriteHeroesContext = createContext();

export const FavouriteHeroesProvider = (props) => {
  const [favouriteHeroesIds, setFavouriteHeroesIds] = useState([]);

  return (
    <FavouriteHeroesContext.Provider value={[favouriteHeroesIds, setFavouriteHeroesIds]}>
      {props.children}
    </FavouriteHeroesContext.Provider>
  );
};
