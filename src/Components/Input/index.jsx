import React from "react";
const Input = (props) => {
  const {
    type,
    name,
    placeholder,
    className,
    required,
    defaultValue,
    autoFocus,
    onChange,
  } = props;

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

export default Input;
