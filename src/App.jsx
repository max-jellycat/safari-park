import React from 'react';
import { connect } from 'react-redux';
import './App.scss';

import { getSecretPokemon } from './actions';

import GuessedPokemons from './components/guessed-pokemons/guessed-pokemons.component';
import Congrats from './components/congrats/congrats.component';
import GuessInput from './components/guess-input/guess-input.component';

const App = ({ success, guessedPokemons, secretPokemon }) => (
  <section className="app">
    <main className="section">
      <h1 className="title is-size-1">Jotto</h1>
      <Congrats success={success} />
      <GuessInput />
      <GuessedPokemons guessedPokemons={guessedPokemons} />
    </main>
  </section>
);

const mapStateToProps = ({ success, guessedPokemons, secretPokemon }) => ({
  success,
  guessedPokemons,
  secretPokemon,
});

export default connect(mapStateToProps, { getSecretPokemon })(App);
