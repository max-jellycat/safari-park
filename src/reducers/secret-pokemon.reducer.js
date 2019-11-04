import { actionTypes } from '../actions';

/**
 * @function secretPokemonReducer
 * @param {object} state - State before reducer
 * @param {object} action - Action to be reduced
 * @returns {object} - New state
 */
export default (state = null, action) => {
  switch (action.type) {
    case actionTypes.SET_SECRET_POKEMON:
      return {
        id: action.payload.id,
        name: action.payload.name,
        sprites: action.payload.sprites,
        types: action.payload.types,
      };
    default:
      return state;
  }
};
