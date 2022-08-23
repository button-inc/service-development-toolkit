import { axe, toHaveNoViolations } from 'jest-axe';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Dropdown, { styles } from '../src/Dropdown';
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';
import { changeSelectorToObject } from '../utils/test-helpers';

expect.extend(toHaveNoViolations);

describe('Dropdown', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<Dropdown />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('Should apply rounded style to the wrapper of the dropdown', () => {
    render(<Dropdown rounded id="test" />);
    const dropdown = document.getElementById('test').parentElement;
    const stylesObject = changeSelectorToObject(styles.rounded.wrapper);
    expect(dropdown).toHaveStyle(stylesObject.base);
  });

  it('Should apply size styles to the container of the label and the dropdown so font size affects both', () => {
    render(<Dropdown size="small" id="test" />);
    const dropdown = document.getElementById('test').parentElement.parentElement;
    const stylesObject = changeSelectorToObject(styles.size.small.container);
    expect(dropdown).toHaveStyle(stylesObject.base);
  });

  it('Should pass through end-user props', () => {
    const handleClick = jest.fn();
    const handleChange = jest.fn();
    render(<Dropdown onClick={handleClick} onChange={handleChange} id="test" />);
    const dropdown = document.getElementById('test');
    fireEvent.click(dropdown);
    fireEvent.change(dropdown, { target: { value: 'test' } });

    expect(handleClick).toHaveBeenCalled();
    expect(handleChange).toHaveBeenCalled();
  });

  it('Should accept static props', () => {
    render(<Dropdown fullWidth id="test" />);
    const dropdown = document.getElementById('test');
    expect(dropdown).toHaveStyle('width: 100%;');
  });
});
