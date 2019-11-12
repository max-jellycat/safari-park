import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

import { storeFactory } from './test/testUtils';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  return shallow(<App store={store} />).dive();
};

describe('redux props', () => {
  it('has access to `success` state', () => {
    const wrapper = setup({ success: true });
    const successProp = wrapper.props().success;
    expect(successProp).toBe(true);
  });

  it('has access to `secretPokemon` state', () => {
    const secretPokemon = {
      id: 25,
      name: 'pikachu',
      sprites: {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
      },
      types: ['electric'],
    };
    const wrapper = setup({ secretPokemon });
    const secretPokemonProp = wrapper.props().secretPokemon;
    expect(secretPokemonProp).toEqual(secretPokemon);
  });

  it('has access to `guessedPokemons` state', () => {
    const guessedPokemons = [
      { guessedPokemon: 'meowth', letterMatchCount: 3 },
      { guessedPokemon: 'bulbasaur', letterMatchCount: 1 },
      { guessedPokemon: 'pidgey', letterMatchCount: 5 },
    ];
    const wrapper = setup({ guessedPokemons });
    const guessedPokemonsProp = wrapper.props().guessedPokemons;
    expect(guessedPokemonsProp).toEqual(guessedPokemons);
  });

  it('`getSecretPokemon` action creator is a function prop', () => {
    const wrapper = setup();
    const { getSecretPokemon } = wrapper.props();
    expect(getSecretPokemon).toBeInstanceOf(Function);
  });
});
