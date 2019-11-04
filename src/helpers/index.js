/**
 * @method getLetterMatchCount
 * @param {string} guessedPokemon
 * @param {string} secretPokemon
 * @returns {number}
 */
export const getLetterMatchCount = (guessedPokemon, secretPokemon) => {
  const secretLetterSet = new Set(secretPokemon.split(''));
  const guessedLetterSet = new Set(guessedPokemon.split(''));

  return [...secretLetterSet].filter((letter) => guessedLetterSet.has(letter))
    .length;
};
