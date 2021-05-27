import { axe, toHaveNoViolations } from 'jest-axe';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import DatePicker, { styles } from '../src/DatePicker';
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';
import { changeSelectorToObject } from '../utils/test-helpers';

expect.extend(toHaveNoViolations);

describe('DatePicker', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<DatePicker />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('Should apply styles from props', () => {
    render(<DatePicker id="test" rounded />);
    const datepicker = document.getElementById('test');
    const stylesObject = changeSelectorToObject(styles.rounded.input);
    expect(datepicker).toHaveStyle(stylesObject.base);
  });

  it('Should pass through end-user props', () => {
    const handleClick = jest.fn();
    const handleChange = jest.fn();
    render(<DatePicker onClick={handleClick} onChange={handleChange} id="test" />);
    const datePicker = document.getElementById('test');
    fireEvent.click(datePicker);
    fireEvent.change(datePicker, { target: { value: '2000-01-01' } });

    expect(handleClick).toHaveBeenCalled();
    expect(handleChange).toHaveBeenCalled();
  });

  it('Should accept the fullWidth static prop', () => {
    render(<DatePicker fullWidth id="test" />);
    const datePicker = document.getElementById('test');
    expect(datePicker).toHaveStyle('width: 100%;');
  });
});
