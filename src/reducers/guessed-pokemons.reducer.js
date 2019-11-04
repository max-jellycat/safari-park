import { actionTypes } from '../actions';

/**
 * @function guessedPokemonsReducer
 * @param {array} state - array of guessed pokemons
 * @param {object} action - action to be reduced
 * @returns {array} - new guessedPokemons state
 */
export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      return [...state, action.payload];
    default:
      return state;
  }
};
