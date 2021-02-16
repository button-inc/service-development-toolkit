import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';
import React from 'react';
import Menu from '../src/Menu';
import Header from '../src/Header';
import 'regenerator-runtime/runtime';

expect.extend(toHaveNoViolations);

describe('Header', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(
      <Header>
        <Menu>
          <Menu.Item expand="500">
            <Header.Toggle>Menu</Header.Toggle>
          </Menu.Item>
          <Menu.Group>
            <span>group1</span>
            <span>group2</span>
            <span>group3</span>
          </Menu.Group>
        </Menu>
        <Header.Sidebar>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
            <Header.Toggle>close</Header.Toggle>
          </ul>
        </Header.Sidebar>
      </Header>
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
