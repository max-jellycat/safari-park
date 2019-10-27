import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = ({ guessedWords }) => (
  <section data-test="component-guessed-words" className="guessed-words">
    {!guessedWords.length && (
      <h3 data-test="guess-instructions" className="instructions">
        Try to guess the secret word!
      </h3>
    )}
  </section>
);

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default GuessedWords;
