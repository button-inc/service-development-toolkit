import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';
import React from 'react';
import Menu from '../src/Menu';
import Navigation from '../src/Navigation';
import 'regenerator-runtime/runtime';

expect.extend(toHaveNoViolations);

describe('Navigation', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(
      <Navigation>
        <Menu>
          <Menu.Item expand="500">
            <Navigation.Toggle>Menu</Navigation.Toggle>
          </Menu.Item>
          <Menu.Group>
            <span>group1</span>
            <span>group2</span>
            <span>group3</span>
          </Menu.Group>
        </Menu>
        <Navigation.Sidebar>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
            <Navigation.Toggle>close</Navigation.Toggle>
          </ul>
        </Navigation.Sidebar>
      </Navigation>
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
