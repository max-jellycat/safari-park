import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({
  handleChange, type, name, placeholder, icon, value,
}) => (
  <div data-test="component-basic-input" className="field">
    <div className="control has-icons-left">
      <input
        className="input"
        onChange={handleChange}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
      />
      <span className="icon is-small is-left">
        <i className={`fas fa-${icon}`} />
      </span>
    </div>
  </div>
);

FormInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

FormInput.defaultProps = {
  type: 'text',
};

export default FormInput;
