import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import RandomDeck from './Components/RandomDeck/RandomDeck';
import './App.scss';

function App() {
  return (
    <>
      <Nav />
      <main>
        <RandomDeck />
      </main>
    </>
  );
}

export default App;
