import { axe, toHaveNoViolations } from 'jest-axe';
import { render, waitFor, screen } from '@testing-library/react';
import React from 'react';
import Navigation from '../src/Navigation';
import 'regenerator-runtime/runtime';

expect.extend(toHaveNoViolations);

describe('Navigation', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(
      <Navigation title="Hello British Columbia" onBannerClick={console.log}>
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
      </Navigation>
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
