import checkPropTypes from 'check-prop-types';
import expectExport from 'expect';

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} value - Data-test value to search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, value) =>
  wrapper.find(`[data-test="${value}"]`);

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
};
