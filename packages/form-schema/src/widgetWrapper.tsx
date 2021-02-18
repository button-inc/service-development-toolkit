import React, { useState } from 'react';

function getValue(inputType) {
  switch (inputType) {
    case 'input':
      return 'value';
    case 'checkbox':
      return 'checked';
    case 'select':
      return 'value';
    case 'file':
      return 'files';
    default:
      return '';
  }
}

const Wrapper = (Component, inputType: string = '') => {
  const valueKey = getValue(inputType);
  return props => {
    const { value, onChange, label, schema, options } = props;
    const { name, title, pattern, minLength, maxLength } = schema;
    const { enumOptions = [] } = options;
    const formProps = {
      onChange: e => {
        onChange(e.target[valueKey]);
      },
      label,
      name,
      maxLength,
      minLength,
      type: inputType,
      pattern,
      value: value || '',
      checked: typeof value === 'undefined' ? false : value,
    };
    if (inputType === 'file') {
      delete formProps.value;
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
