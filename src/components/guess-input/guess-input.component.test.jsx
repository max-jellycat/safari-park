import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../test/testUtils';
import GuessInput from './guess-input.component';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  return shallow(<GuessInput store={store} />).dive();
};

describe('render', () => {
  describe('pokemon has not been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState).dive();
    });
    test('renders without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });

    test('renders input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(1);
    });

    test('renders submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(1);
    });
  });
  describe('pokemon has been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState).dive();
    });
    test('renders without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });

    test('does not render input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(0);
    });

    test('does not render submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'input-box');
      expect(submitButton.length).toBe(0);
    });
  });
});

describe('update state', () => {});

describe('redux props', () => {
  it('has success piece of state as prop', () => {
    const wrapper = setup({ success: false });
    const successProp = wrapper.props().success;
    expect(successProp).toBe(false);
  });

  it('`guessWord` action creator is a function prop', () => {
    const wrapper = setup();
    const { guessPokemon } = wrapper.props();
    expect(guessPokemon).toBeInstanceOf(Function);
  });
});
