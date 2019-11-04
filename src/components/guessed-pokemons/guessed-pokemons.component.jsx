import React from 'react';
import PropTypes from 'prop-types';

const GuessedPokemons = ({ guessedPokemons }) => (
  <section data-test="component-guessed-pokemons" className="guessed-pokemons">
    {!guessedPokemons.length ? (
      <h3 data-test="guess-instructions" className="instructions">
        Try to guess the secret pokemon!
      </h3>
    ) : (
      <div data-test="guessed-pokemons" className="guessed-pokemons-container">
        <h3 className="lead is-size-5">Guessed Pokemons</h3>
        <table className="table is-striped mt-1 mx-auto">
          <thead>
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>
            {guessedPokemons.map((pokemon) => (
              <tr data-test="guessed-pokemon" key={pokemon.guessedPokemon}>
                <td>{pokemon.guessedPokemon}</td>
                <td>{pokemon.letterMatchCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </section>
);

GuessedPokemons.propTypes = {
  guessedPokemons: PropTypes.arrayOf(
    PropTypes.shape({
      guessedPokemon: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default GuessedPokemons;
