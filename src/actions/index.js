import axios from 'axios';
import { getLetterMatchCount } from '../helpers';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_POKEMON: 'SET_SECRET_POKEMON',
  CHECK_ARTWORK: 'CHECK_ARTWORK',
};

/**
 * Returns redux thunk function that dispatches GUESS_WORD action
 * and (conditionnaly) CORRECT_GUESS action
 * @function guessPokemon
 * @param {string} guessedPokemon
 * @returns {function}
 */
export const guessPokemon = (guessedPokemon) => (dispatch, getState) => {
  const { secretPokemon } = getState();
  const letterMatchCount = getLetterMatchCount(guessedPokemon, secretPokemon);

  dispatch({
    type: actionTypes.GUESS_WORD,
    payload: { guessedPokemon, letterMatchCount },
  });

  guessedPokemon === secretPokemon &&
    dispatch({
      type: actionTypes.CORRECT_GUESS,
    });
};

export const getSecretPokemon = () => (dispatch) => {
  const randomId = Math.ceil(Math.random() * 807);
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
    .then((response) => {
      const { id, name, sprites, types } = response.data;
      const serializedName = name.includes('-') ? name.split('-')[0] : name;
      console.log(serializedName, name);
      // dispatch(hasArtwork(serializedName));
      dispatch({
        type: actionTypes.SET_SECRET_POKEMON,
        payload: {
          id,
          name: serializedName,
          sprites,
          image: `http://www.pokestadium.com/assets/img/sprites/official-art/large/${serializedName}.png`,
          types: types.reduce(
            (accumulator, type) => [...accumulator, type.type.name],
            [],
          ),
        },
      });
    });
};

export const hasArtwork = (name) => (dispatch) => {
  axios
    .get(
      `http://www.pokestadium.com/assets/img/sprites/official-art/large/${name}.png`,
    )
    .then((res) => {
      res.header('Access-Control-Allow-Origin', '*');
      dispatch({ type: 'CHECK_ARTWORK', payload: res.status !== 404 });
    });
};
