import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import RandomDeck from './Components/RandomDeck/RandomDeck';
import SearchView from './Components/SearchView/SearchView';
import FavouriteHeroes from './Components/FavouriteHeroes/FavouriteHeroes';
import CompareHeroes from './Components/CompareHeroes/CompareHeroes';
import HeroDetailed from './Components/HeroDetailed/HeroDetailed';
import './App.scss';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <main>
          <Switch>
            <Route exact path='/'>
              <RandomDeck />
            </Route>
            <Route path='/search/:name'>
              <SearchView />
            </Route>
            <Route path='/favourite'>
              <FavouriteHeroes />
            </Route>
            <Route path='/compare'>
              <CompareHeroes />
            </Route>
            <Route path='/detailed/:id'>
              <HeroDetailed />
            </Route>
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
