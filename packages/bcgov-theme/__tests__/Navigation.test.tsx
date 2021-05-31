import { axe, toHaveNoViolations } from 'jest-axe';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Navigation from '../src/Navigation';
import { styles } from '../src/Header';
import 'regenerator-runtime/runtime';
import { changeSelectorToObject } from '../utils/test-helpers';
import '@testing-library/jest-dom/extend-expect';

expect.extend(toHaveNoViolations);

const Menu = () => (
  <ul>
    <li>
      <a href=".">Link 2</a>
    </li>
    <li>
      <a href=".">Link 2</a>
    </li>
    <li>
      <a href=".">Link 3</a>
    </li>
    <li>
      <a href=".">Link 4</a>
    </li>
    <li>
      <a href=".">Link 5</a>
    </li>
    <li>
      <a href=".">Link 6</a>
    </li>
  </ul>
);

describe('Navigation', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(
      <Navigation title="Hello British Columbia">
        <Menu />
      </Navigation>
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('Should accept end-user props', async () => {
    const handleClick = jest.fn();
    render(
      <Navigation title="Hello British Columbia" id="test" onClick={handleClick}>
        <Menu />
      </Navigation>
    );
    const header = document.getElementById('test');
    fireEvent.click(header);
    expect(handleClick).toHaveBeenCalled();
  });

  it('Should apply styles from props', () => {
    render(
      <Navigation title="Hello British Columbia" id="test" header="main">
        <Menu />
      </Navigation>
    );
    const header = document.querySelector('#test>.pg-menu-container');
    const stylesObject = changeSelectorToObject(styles.header.main.container);
    expect(header).toHaveStyle(stylesObject.base);
  });

  it('Should apply styles from props', () => {
    render(
      <Navigation title="Hello British Columbia" id="test" header="main">
        <Menu />
      </Navigation>
    );
    const header = document.querySelector('#test>.pg-menu-container');
    const stylesObject = changeSelectorToObject(styles.header.main.container);
    expect(header).toHaveStyle(stylesObject.base);
  });
});
