import React, { useState } from 'react';
import './CompareHeroes.scss';
import { getDetailedInfoById } from '../../requests';
import { searchHeroByName } from '../../requests';
import ListItem from '../ListItem/ListItem';
import CompareCard from '../CompareCard/CompareCard';

const CompareHeroes = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [searchHeroList, setSearchHeroList] = useState([]);
  const [compareHeroList, setCompareHeroList] = useState([]);
  const [compareHeroesArray, setCompareHeroesArray] = useState([]);

  const displaySearchHeroList = () => {
    console.log(searchInputValue);
    searchHeroByName(searchInputValue).then((searchResults) => {
      const { data } = searchResults;

      if (data.error) {
        return;
      }
      const { results } = data;
      console.log(results);
      let heroNamesList = [];
      heroNamesList = results.map(({ name, biography, id, image }) => {
        const hero = {
          heroName: name,
          heroFullName: biography['full-name'],
          heroId: id,
          imageUrl: image.url,
        };
        return hero;
      });
      console.log(heroNamesList);
      setSearchHeroList(heroNamesList);
    });
  };
  const handleOnClick = () => {
    displaySearchHeroList();
  };

  const addToCompareList = (e) => {
    const heroId = e.target.dataset['id'];
    console.log(e.target.dataset['id']);
    let hero = {};
    for (let i = 0; i < searchHeroList.length; i++) {
      if (searchHeroList[i].heroId === heroId) {
        hero = {
          heroName: searchHeroList[i].heroName,
          heroFullName: searchHeroList[i].heroFullName,
          heroId: searchHeroList[i].heroId,
          imageUrl: searchHeroList[i].imageUrl,
        };
      }
    }
    console.log(hero);
    const newList = compareHeroList.concat(hero);
    setCompareHeroList(newList);
  };

  const deleteFromCompareHeroList = (e) => {
    const heroId = e.target.dataset['id'];
    const oldCompareHeroList = compareHeroList;
    const newCompareHeroList = oldCompareHeroList.filter((item) => item.heroId !== heroId);
    setCompareHeroList(newCompareHeroList);
  };

  const compareHeroes = async () => {
    const heroesIdList = compareHeroList.map(({ heroId }) => {
      return heroId;
    });

    console.log(heroesIdList);
    const heroes = [];
    for (const heroId of heroesIdList) {
      const hero = await getDetailedInfoById(heroId);
      heroes.push(hero);
    }
    const heroesSorted = heroes.map(({ data }) => {
      const hero = {
        heroName: data.name,
        heroId: data.id,
        powerstats: data.powerstats,
        imageUrl: data.image.url,
        biography: data.biography,
        appearance: data.appearance,
      };
      return hero;
    });
    console.log(heroes);
    console.log(heroesSorted);
    setCompareHeroesArray(heroesSorted);
  };

  return (
    <section className='compare'>
      <div className='compare__search'>
        <input
          type='text'
          className='compare__search__input'
          placeholder='What hero You want to compare?'
          onChange={(event) => {
            setSearchInputValue(event.target.value);
          }}
          value={searchInputValue}
          aria-label='compare heroes search input'
        />
        <button className='compare__search__btn' onClick={() => handleOnClick()}>
          search
        </button>
      </div>

      <div className='compare__lists__wrapper'>
        <div className='compare__lists'>
          <ul className='compare__lists__search'>
            {searchHeroList.map(({ heroId, heroName, heroFullName, imageUrl }) => (
              <ListItem
                key={heroId}
                heroId={heroId}
                heroName={heroName}
                heroFullName={heroFullName}
                imageUrl={imageUrl}
                addToCompareList={addToCompareList}
              />
            ))}
          </ul>
          <ul className='compare__lists__compareList'>
            {compareHeroList.map(({ heroId, heroName, heroFullName, imageUrl }) => (
              <ListItem
                key={heroId}
                heroId={heroId}
                heroName={heroName}
                heroFullName={heroFullName}
                imageUrl={imageUrl}
                deleteFromCompareHeroList={deleteFromCompareHeroList}
              />
            ))}
          </ul>
        </div>
        <button onClick={compareHeroes} className='compare__lists__btn'>
          compare!
        </button>
      </div>

      <CompareCard compareHeroesArray={compareHeroesArray} />
    </section>
  );
};

export default CompareHeroes;
