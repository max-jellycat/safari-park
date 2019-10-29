import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = ({ guessedWords }) => (
  <section data-test="component-guessed-words" className="guessed-words">
    {!guessedWords.length ? (
      <h3 data-test="guess-instructions" className="instructions">
        Try to guess the secret word!
      </h3>
    ) : (
      <div data-test="guessed-words" className="guessed-words-container">
        <h3>Guessed Words</h3>
        <table>
          <thead>
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>
            {guessedWords.map((word) => (
              <tr data-test="guessed-word" key={word.guessedWord}>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
