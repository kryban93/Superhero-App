import React from 'react';
import './App.scss';
import Nav from './Components/Nav/Nav';
import RandomDeck from './Components/RandomDeck/RandomDeck';

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
