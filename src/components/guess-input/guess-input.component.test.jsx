import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../test/testUtils';
import GuessInput from './guess-input.component';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<GuessInput store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe('render', () => {
  describe('word has not been guessed', () => {
    test('renders without error', () => {});

    test('renders input box', () => {});

    test('renders submit button', () => {});
  });
  describe('word has been guessed', () => {
    test('renders without error', () => {});

    test('does not render input box', () => {});

    test('does not render submit button', () => {});
  });
});

describe('update state', () => {});
