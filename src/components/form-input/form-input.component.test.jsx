import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../test/testUtils';
import FormInput from './form-input.component';

const defaultProps = {
  name: 'test-input',
  placeholder: 'Is this working?',
  icon: 'question',
  value: 'BANANA',
  handleChange: () => console.log('BANANA'),
};

/**
 * Factory function to create a ShallowWrapper for GuessedPokemons component.
 * @function setup
 * @param {object} props
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<FormInput {...setupProps} />);
};

it('do not throw warning with expected props', () => {
  checkProps(FormInput, defaultProps);
});

describe('form input helper', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  it('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-basic-input');
    expect(component.length).toBe(1);
  });

  it('has default type of `text` if no type specified in props', () => {
    const input = wrapper.find('.input');
    expect(input.filterWhere((item) => item.prop('type') === 'text').length).toBe(
      1,
    );
  });
});
