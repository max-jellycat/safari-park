/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} value - Data-test value to search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, value) =>
  wrapper.find(`[data-test="${value}"]`);
