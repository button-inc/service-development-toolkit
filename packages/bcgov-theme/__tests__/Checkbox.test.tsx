import { axe, toHaveNoViolations } from 'jest-axe';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Checkbox, { styles } from '../src/Checkbox';
import 'regenerator-runtime/runtime';
import { changeSelectorToObject } from '../utils/test-helpers';
import '@testing-library/jest-dom/extend-expect';

expect.extend(toHaveNoViolations);

describe('Checkbox', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<Checkbox label="checkbox" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('Should apply size styles from props to container', () => {
    render(<Checkbox id="test" size="small" />);
    // Input is inside a label inside the container, need to go up two levels
    const checkbox = document.getElementById('test').parentElement.parentElement;
    const stylesObject = changeSelectorToObject(styles.size.small.container);
    expect(checkbox).toHaveStyle(stylesObject.base);
  });

  it('Should pass through end-user props', () => {
    const handleClick = jest.fn();
    const handleChange = jest.fn();
    render(<Checkbox onClick={handleClick} onChange={handleChange} id="test" />);
    const checkbox = document.getElementById('test');
    fireEvent.click(checkbox);
    fireEvent.change(checkbox, { target: { value: '2000-01-01' } });
    expect(handleClick).toHaveBeenCalled();
    expect(handleChange).toHaveBeenCalled();
  });

  it('Should pass through end-user attributes', () => {
    render(<Checkbox name="checkbox" value="value" id="test" />);
    const checkbox = document.getElementById('test');
    expect(checkbox).toHaveAttribute('name', 'checkbox');
    expect(checkbox).toHaveAttribute('value', 'value');
  });
});
