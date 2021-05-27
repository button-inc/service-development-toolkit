import { axe, toHaveNoViolations } from 'jest-axe';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Fieldset, { styles } from '../src/Fieldset';
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';
import { changeSelectorToObject } from '../utils/test-helpers';

expect.extend(toHaveNoViolations);

describe('Fieldset', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<Fieldset />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('Should accept fullWidth prop', async () => {
    render(<Fieldset id="test-fieldset" fullWidth />);
    const fieldset = document.querySelector('#test-fieldset');
    const style = window.getComputedStyle(fieldset);
    expect(style.width).toBe('100%');
  });

  it('Should pass through end-user props', async () => {
    const handleClick = jest.fn();
    render(<Fieldset id="test-fieldset" style={{ color: 'red' }} onClick={handleClick} />);
    const fieldset = document.querySelector('#test-fieldset');
    expect(fieldset).toHaveStyle('color: red;');

    fireEvent.click(fieldset);
    expect(handleClick).toHaveBeenCalled();
  });

  it('Should apply styles from props', () => {
    render(<Fieldset id="test" size="small" />);
    const fieldset = document.getElementById('test');
    const stylesObject = changeSelectorToObject(styles.size.small.container);
    expect(fieldset).toHaveStyle(stylesObject.base);
  });
});
