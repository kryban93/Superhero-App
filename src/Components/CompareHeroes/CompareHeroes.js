import React, { useState } from 'react';
import './CompareHeroes.scss';
import { getDetailedInfoById } from '../../requests';
import { searchHeroByName } from '../../requests';
import ListItem from '../ListItem/ListItem';
import CompareCard from '../CompareCard/CompareCard';
import superHeroesImage from '../../assets/images/superheroes.png';

const powerstatsInitialVal = {
  combat: '0',
  durability: '0',
  intelligence: '0',
  power: '0',
  speed: '0',
  strength: '0',
};

const CompareHeroes = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [searchHeroList, setSearchHeroList] = useState([]);
  const [compareHeroList, setCompareHeroList] = useState([]);
  const [compareHeroesArray, setCompareHeroesArray] = useState([]);
  const [wrongSearchInput, setWrongSearchInputState] = useState(false);
  const [powerstatsMaxState, setPowerstatsMaxState] = useState(powerstatsInitialVal);

  const displaySearchHeroList = () => {
    setPowerstatsMaxState(powerstatsInitialVal);
    searchHeroByName(searchInputValue).then((searchResults) => {
      const { data } = searchResults;

      if (data.error) {
        setWrongSearchInputState(true);
        return;
      }
      const { results } = data;

      let heroNamesList = results.map(({ name, biography, id, image }) => {
        return {
          heroName: name,
          heroFullName: biography['full-name'],
          heroId: id,
          imageUrl: image.url,
        };
      });
      setSearchHeroList(heroNamesList);
      setWrongSearchInputState(false);
    });
  };
  const handleOnClick = () => {
    displaySearchHeroList();
    setPowerstatsMaxState(powerstatsInitialVal);
  };

  const addToCompareList = (e) => {
    const heroId = e.target.dataset['id'];

    for (let hero of compareHeroList) {
      if (hero.heroId === heroId) {
        return;
      }
    }

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
    setPowerstatsMaxState(powerstatsInitialVal);
    const heroesIdList = compareHeroList.map(({ heroId }) => {
      return heroId;
    });

    const heroes = [];
    for (let heroId of heroesIdList) {
      const hero = await getDetailedInfoById(heroId);
      heroes.push(hero);
    }
    const heroesSorted = heroes.map(({ data }) => {
      return {
        heroName: data.name,
        heroId: data.id,
        powerstats: data.powerstats,
        imageUrl: data.image.url,
        biography: data.biography,
        appearance: data.appearance,
      };
    });
    let powerstatsMaxValues = powerstatsMaxState;

    for (let hero of heroesSorted) {
      Object.keys(hero.powerstats).forEach((keyName) => {
        if (parseInt(hero.powerstats[keyName]) > parseInt(powerstatsMaxValues[keyName])) {
          powerstatsMaxValues[keyName] = hero.powerstats[keyName];
        }
      });
    }
    console.log(powerstatsMaxValues);

    setPowerstatsMaxState(powerstatsMaxValues);
    setCompareHeroesArray(heroesSorted);
  };

  return (
    <section className='compare'>
      <div className='compare__header'>
        <h1 className='compare__title'>What heroes You want to compare?</h1>

        <div className='compare__search'>
          <input
            id='compareSearchInput'
            type='text'
            className='compare__search__input'
            placeholder='write hero name'
            onChange={(event) => {
              setSearchInputValue(event.target.value);
            }}
            value={searchInputValue}
            aria-label='compare heroes search input'
          />
          <label className='compare__search__label' htmlFor='compareSearchInput'>
            write hero name
          </label>
          <button className='compare__search__btn' onClick={() => handleOnClick()}>
            search
          </button>
        </div>
      </div>
      {wrongSearchInput && (
        <div className='compare__wrong'>
          <h1 className='compare__wrong__title'>There's no results for such phrase!</h1>
          <img className='compare__wrong__image' src={superHeroesImage} alt='Teen Titans' />
        </div>
      )}
      <div className='compare__lists'>
        <div className='compare__lists__search'>
          <ul className='compare__lists__search__list'>
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
        </div>
        <div className='compare__lists__compare'>
          <ul className='compare__lists__compare__list'>
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
      </div>
      <div className='compare__content'>
        <button onClick={compareHeroes} className='compare__content__btn'>
          compare!
        </button>
        <CompareCard compareHeroesArray={compareHeroesArray} powerstatsMaxValues={powerstatsMaxState} />
      </div>
    </section>
  );
};

export default CompareHeroes;
