import { actionTypes } from '../actions';

/**
 * @function successReducer
 * @param {array} state -- Array of guessed pokemons
 * @param {object} action
 * @returns {boolean} -- New success state
 */
export default (state = false, action) => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    default:
      return state;
  }
};
