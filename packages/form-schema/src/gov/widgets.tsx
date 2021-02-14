import Button from 'component-library-gov/Button';
import Checkbox from 'component-library-gov/Checkbox';
import RadioButton from 'component-library-gov/RadioButton';
import Input from 'component-library-gov/Input';
import React from 'react';

function getValue(inputType) {
  switch (inputType) {
    case 'input':
      return 'value';
    case 'checkbox':
      return 'checked';
    default:
      return '';
  }
}

const Wrapper = (Component, inputType: string = '') => {
  const valueKey = getValue(inputType);
  return props => {
    const { value, onChange, label, schema } = props;
    const { name, title, inputType, pattern, minLength, maxLength } = schema;
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
      />
    );
  };
};

export default {
  TextWidget: Wrapper(Input, 'input'),
  RadioWidget: Wrapper(RadioButton),
  CheckboxWidget: Wrapper(Checkbox, 'checkbox'),
  ButtonWidget: Button,
};
