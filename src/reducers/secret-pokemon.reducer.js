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
        image: action.payload.image,
        sprites: action.payload.sprites,
        types: action.payload.types,
      };
    case actionTypes.CHECK_ARTWORK:
      return {
        ...state,
        hasArtwork: action.payload,
      };
    default:
      return state;
  }
};
