import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';

class GuessInput extends Component {
  render() {
    const { success } = this.props;
    return (
      <div data-test="component-input" className="guess-input">
        {success ? null : (
          <form onSubmit={() => {}} className="guess-input">
            <FormInput
              data-test="input-box"
              name="guess-input"
              placeholder="Type here to guess..."
              icon="question"
              value=""
              handleChange={() => {}}
            />
            <button
              data-test="submit-button"
              type="submit"
              className="button is-primary has-shadow"
            >
              Guess
            </button>
          </form>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  success: state.success,
});

GuessInput.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(GuessInput);
