import { combineReducers } from 'redux';
import successReducer from './success.reducer';
import guessedPokemonsReducer from './guessed-pokemons.reducer';
import secretPokemonReducer from './secret-pokemon.reducer';

export default combineReducers({
  success: successReducer,
  guessedPokemons: guessedPokemonsReducer,
  secretPokemon: secretPokemonReducer,
});
