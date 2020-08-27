import React from 'react';
import './App.scss';
import Nav from './Components/Nav/Nav';
import RandomDeck from './Components/RandomDeck/RandomDeck';

function App() {
  return (
    <>
      <Nav />
      <main>
        <div>Main content</div>
        <RandomDeck />
      </main>
    </>
  );
}

export default App;
