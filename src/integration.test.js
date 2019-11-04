import { storeFactory } from './test/testUtils';
import { guessPokemon } from './actions';

describe('guessPokemon action dispatcher', () => {
  const secretPokemon = 'pikachu';
  const unsuccessfulGuess = 'meowth';

  describe('no guessed pokemons', () => {
    let store;
    const initialState = { secretPokemon };
    beforeEach(() => {
      store = storeFactory(initialState);
    });

    it('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessPokemon(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedPokemons: [
          {
            guessedPokemon: unsuccessfulGuess,
            letterMatchCount: 1,
          },
        ],
      };
      expect(newState).toEqual(expectedState);
    });

    it('updates state correctly for successful guess', () => {
      store.dispatch(guessPokemon(secretPokemon));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedPokemons: [
          {
            guessedPokemon: secretPokemon,
            letterMatchCount: secretPokemon.length,
          },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });

  describe('some guessed pokemons', () => {
    const guessedPokemons = [
      { guessedPokemon: 'bulbasaur', letterMatchCount: 2 },
      { guessedPokemon: 'charmander', letterMatchCount: 3 },
      { guessedPokemon: 'squirtle', letterMatchCount: 2 },
    ];
    const initialState = { guessedPokemons, secretPokemon };
    let store;
    beforeEach(() => {
      store = storeFactory(initialState);
    });

    it('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessPokemon(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        guessedPokemons: [
          ...guessedPokemons,
          { guessedPokemon: unsuccessfulGuess, letterMatchCount: 1 },
        ],
        success: false,
      };
      expect(newState).toEqual(expectedState);
    });

    it('updates state correctly for successful guess', () => {
      store.dispatch(guessPokemon(secretPokemon));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        guessedPokemons: [
          ...guessedPokemons,
          {
            guessedPokemon: secretPokemon,
            letterMatchCount: secretPokemon.length,
          },
        ],
        success: true,
      };
      expect(newState).toEqual(expectedState);
    });
  });
});
