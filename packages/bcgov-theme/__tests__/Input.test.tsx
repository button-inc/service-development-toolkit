import { axe, toHaveNoViolations } from 'jest-axe';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Input, { styles } from '../src/Input';
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';
import { changeSelectorToObject } from '../utils/test-helpers';

expect.extend(toHaveNoViolations);

describe('Input', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<Input label="input" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('Should apply size styles from props to container', () => {
    render(<Input id="test" size="small" />);
    const input = document.getElementById('test').parentElement;
    const stylesObject = changeSelectorToObject(styles.size.small.container);
    expect(input).toHaveStyle(stylesObject.base);
  });

  it('Should pass through end-user props', () => {
    const handleClick = jest.fn();
    const handleChange = jest.fn();
    render(<Input onClick={handleClick} onChange={handleChange} id="test" />);
    const input = document.getElementById('test');
    fireEvent.click(input);
    fireEvent.change(input, { target: { value: '2000-01-01' } });

    expect(handleClick).toHaveBeenCalled();
    expect(handleChange).toHaveBeenCalled();
  });

  it('Should accept the fullWidth static prop', () => {
    render(<Input id="test" fullWidth />);
    const input = document.getElementById('test');
    expect(input).toHaveStyle('width: 100%;');
  });
});
