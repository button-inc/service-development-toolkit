import React, { useState } from 'react';

function getValue(inputType) {
  switch (inputType) {
    case 'checkbox':
      return 'checked';
    case 'file':
      return 'files';
    default:
      return 'value';
  }
}

const Wrapper = (Component, inputType: string = '') => {
  const valueKey = getValue(inputType);
  return props => {
    const { value, onChange, label, schema, options, required } = props;
    const { name, title, pattern, minLength, maxLength } = schema;
    const { enumOptions = [] } = options;
    const formProps = {
      onChange: e => {
        onChange(e.target[valueKey]);
      },
      label,
      name,
      maxLength,
      required,
      minLength,
      type: inputType,
      pattern,
      value: value || '',
      checked: typeof value === 'undefined' ? false : value,
    };
    if (inputType === 'file') {
      delete formProps.value;
    }

    if (inputType === 'checkbox') {
      formProps.value = true;
    }

    if (inputType === 'radio') {
      return (
        <div>
          {enumOptions.map(option => (
            <Component
              key={option.value}
              {...formProps}
              label={option.label}
              value={option.value}
              checked={option.value === value}
            />
          ))}
        </div>
      );
    }
    return (
      <Component {...formProps}>
        {enumOptions &&
          enumOptions.map(({ value, label }) => {
            return (
              <option key={value} value={value}>
                {label}
              </option>
            );
          })}
      </Component>
    );
  };
};

export default Wrapper;
