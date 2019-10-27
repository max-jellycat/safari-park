import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional component for congratuloatory message.
 * @function
 * @param {boolean} success
 * @returns {JSX.Element}
 */
const Congrats = ({ success }) => (
  <article
    data-test="component-congrats"
    className={`${success && 'notification is-success'}`}
  >
    {success && (
      <span data-test="congrats-message">
        Congratulations! You guessed the word!
      </span>
    )}
  </article>
);

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
