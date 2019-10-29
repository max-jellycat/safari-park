/**
 * @function successReducer
 * @param {array} state -- Array of guessed words
 * @param {object} action
 * @returns {boolean} -- New success state
 */

const INITIAL_STATE = {
  success: false,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
