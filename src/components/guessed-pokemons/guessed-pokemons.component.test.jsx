import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../test/testUtils';
import GuessedPokemons from './guessed-pokemons.component';

const defaultProps = {
  guessedPokemons: [{ guessedPokemon: 'train', letterMatchCount: 3 }],
};

/**
 * Factory function to create a ShallowWrapper for GuessedPokemons component.
 * @function setup
 * @param {object} props
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedPokemons {...setupProps} />);
};

it('do not throw warning with expected props', () => {
  checkProps(GuessedPokemons, defaultProps);
});

describe('if there are no pokemons guessed', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({ guessedPokemons: [] });
  });

  it('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-pokemons');
    expect(component.length).toBe(1);
  });

  it('renders instructions', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
  });
});

describe('if there are pokemons guessed', () => {
  const guessedPokemons = [
    { guessedPokemon: 'train', letterMatchCount: 3 },
    { guessedPokemon: 'agile', letterMatchCount: 1 },
    { guessedPokemon: 'party', letterMatchCount: 5 },
  ];

  let wrapper;

  beforeEach(() => {
    wrapper = setup({ guessedPokemons });
  });
  it('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-pokemons');
    expect(component.length).toBe(1);
  });

  it('renders "guessed pokemons" section', () => {
    const guessedPokemonsDiv = findByTestAttr(wrapper, 'guessed-pokemons');
    expect(guessedPokemonsDiv.length).toBe(1);
  });

  it('displays correct numbers of guessed pokemons', () => {
    const guessedPokemonsNodes = findByTestAttr(wrapper, 'guessed-pokemon');
    expect(guessedPokemonsNodes.length).toBe(guessedPokemons.length);
  });
});
