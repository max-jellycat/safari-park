import React from 'react';
import { connect } from 'react-redux';
import './App.scss';

import { getSecretPokemon } from './actions';

import GuessedPokemons from './components/guessed-pokemons/guessed-pokemons.component';
import Congrats from './components/congrats/congrats.component';
import GuessInput from './components/guess-input/guess-input.component';
import GuessImage from './components/guess-image/guess-image.component';
import Loader from './components/loader/loader.component';

class App extends React.Component {
  render() {
    const { success, guessedPokemons, getSecretPokemon } = this.props;

    return (
      <section className="app">
        <main className="section">
          <h1 className="title is-size-1">Safari Park</h1>
          <Congrats success={success} />
          <Loader />
          <GuessImage />
          <GuessInput />
          <GuessedPokemons guessedPokemons={guessedPokemons} />
          <button type="button" onClick={() => getSecretPokemon()}>
            Pokemon
          </button>
        </main>
      </section>
    );
  }
}

const mapStateToProps = ({ success, guessedPokemons, secretPokemon }) => ({
  success,
  guessedPokemons,
  secretPokemon,
});

export default connect(mapStateToProps, { getSecretPokemon })(App);
