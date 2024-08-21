import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  type,
  name,
  placeholder,
  className,
  required,
  defaultValue,
  autoFocus,
  onChange,
}) => {
  return (
    <input
      type={type}
      autoFocus={autoFocus}
      name={name}
      defaultValue={defaultValue}
      id={name}
      onChange={onChange}
      className={`${className} focus:outline-none mt-3 block w-full truncate border-b border-gray-300 p-2.5 text-sm text-gray-900 sm:text-sm`}
      placeholder={placeholder}
      required={required}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
  defaultValue: PropTypes.string,
  autoFocus: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Input;
