import React from 'react';
import './App.scss';

import GuessedPokemons from './components/guessed-pokemons/guessed-pokemons.component';
import Congrats from './components/congrats/congrats.component';
import GuessInput from './components/guess-input/guess-input.component';

const App = () => (
  <section className="app">
    <main className="section">
      <h1 className="title is-size-1">Jotto</h1>
      <Congrats success={false} />
      <GuessInput />
      <GuessedPokemons
        guessedPokemons={[
          { guessedPokemon: 'train', letterMatchCount: 3 },
          { guessedPokemon: 'party', letterMatchCount: 5 },
        ]}
      />
    </main>
  </section>
);

export default App;
