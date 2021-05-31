import { axe, toHaveNoViolations } from 'jest-axe';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import RadioButton, { styles } from '../src/RadioButton';
import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom/extend-expect';
import { changeSelectorToObject } from '../utils/test-helpers';

expect.extend(toHaveNoViolations);

describe('RadioButton', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<RadioButton label="radio" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('Should apply size styles from props to container', () => {
    render(<RadioButton id="test" size="small" label="test" />);
    // Input is nested inside a label, inside the container
    const radioButton = document.getElementById('test').parentElement.parentElement;
    const stylesObject = changeSelectorToObject(styles.size.small.container);
    expect(radioButton).toHaveStyle(stylesObject.base);
  });

  it('Should pass through end-user props', () => {
    const handleClick = jest.fn();
    render(<RadioButton id="test" size="small" label="test" name="my-name" onClick={handleClick} />);
    const radioButton = document.getElementById('test');
    expect(radioButton).toHaveAttribute('name', 'my-name');
    fireEvent.click(radioButton);

    expect(handleClick).toHaveBeenCalled();
  });
});
