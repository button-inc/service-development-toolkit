import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';
import React from 'react';
import Menu from '../src/Menu';
import 'regenerator-runtime/runtime';

expect.extend(toHaveNoViolations);

describe('Menu', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(
      <Menu>
        <Menu.Group collapse="700">
          <span>group1</span>
          <span>group2</span>
          <span>group3</span>
        </Menu.Group>
        <Menu.Item expand="500">item1</Menu.Item>
      </Menu>
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
