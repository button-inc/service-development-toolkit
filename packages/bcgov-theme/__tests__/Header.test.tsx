import { axe, toHaveNoViolations } from 'jest-axe';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Header, { styles } from '../src/Header';
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';
import { changeSelectorToObject } from '../utils/test-helpers';

expect.extend(toHaveNoViolations);

describe('Header', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<Header title="header" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('Should accept end-user props', async () => {
    const handleClick = jest.fn();
    render(<Header title="header" onClick={handleClick} id="test" />);
    const header = document.getElementById('test');
    fireEvent.click(header);
    expect(handleClick).toHaveBeenCalled();
  });

  it('Should apply styles from props', () => {
    render(<Header id="test" header="main" />);
    const header = document.getElementById('test');
    const stylesObject = changeSelectorToObject(styles.header.main.container);
    expect(header).toHaveStyle(stylesObject.base);
  });
});
