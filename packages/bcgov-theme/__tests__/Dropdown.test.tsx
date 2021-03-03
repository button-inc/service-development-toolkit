import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';
import React from 'react';
import Dropdown from '../src/Dropdown';
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';

expect.extend(toHaveNoViolations);

describe('Dropdown', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<Dropdown />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
