import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../reducers';
import { middlewares } from '../configureStore';

/**
 * Create a testing store with imported reducers, middleware and initial state.
 * globals: rootReducer, middlewares
 * @param {object} initialState
 * @function storeFactory
 * @returns {Store}
 */
export const storeFactory = (initialState) => createStore(rootReducer, initialState, applyMiddleware(...middlewares));

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} value - Data-test value to search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, value) => wrapper.find(`[data-test="${value}"]`);

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name,
  );
  expect(propError).toBeUndefined();
};
