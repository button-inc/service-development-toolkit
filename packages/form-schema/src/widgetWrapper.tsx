import React from 'react';

function getValue(inputType) {
  switch (inputType) {
    case 'input':
      return 'value';
    case 'checkbox':
      return 'checked';
    case 'select':
      return 'value';
    default:
      return '';
  }
}

const Wrapper = (Component, inputType: string = '') => {
  const valueKey = getValue(inputType);
  return props => {
    const { value, onChange, label, schema, options } = props;
    const { name, title, inputType, pattern, minLength, maxLength } = schema;
    const { enumOptions = [] } = options;

    return (
      <Component
        onChange={e => onChange(e.target[valueKey])}
        label={label}
        name={name}
        maxLength={maxLength}
        minLength={minLength}
        type={inputType}
        pattern={pattern}
        value={value || ''}
        checked={typeof value === 'undefined' ? false : value}
      >
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
